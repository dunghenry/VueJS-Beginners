<template>
  <div>
    <TodoForm @add-todo="addTodo" />
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind:todo="todo"
      @handle-completed="handleCompleted"
      @handle-delete="handleDelete"
    />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'
import axios from 'axios'
import { ref } from 'vue'
import { createToast } from 'mosha-vue-toastify'
export default {
  name: 'TheTodos',
  components: { TodoItem, TodoForm },
  setup() {
    const todos = ref([])
    const getTodos = async () => {
      try {
        const response = await axios.get(
          'https://express-mongodb-todos.herokuapp.com/api/v1/todos'
        )
        todos.value = response.data
      } catch (error) {
        console.log(error)
      }
    }
    getTodos()

    const handleCompleted = async id => {
      const response = await axios.get(
        `https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`
      )
      const dataUpdate = response.data
      dataUpdate.completed = !response.data.completed
      await axios.put(
        `https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`,
        dataUpdate
      )
      createToast('Update successfully!', {
        type: 'success',
        showIcon: 'true'
      })
      todos.value.map(todo => {
        if (todo._id === id) todo.completed = !todo.completed
        return todo
      })
    }
    const handleDelete = async id => {
      const response = await axios.delete(
        `https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`
      )
      todos.value = todos.value.filter(todo => todo._id !== id)
      createToast(response.data, {
        type: 'success',
        showIcon: 'true'
      })
    }
    const addTodo = async data => {
      const response = await axios.post(
        `https://express-mongodb-todos.herokuapp.com/api/v1/todos`,
        data
      )
      todos.value = [data, ...todos.value]
      console.log(response)
      createToast(response.statusText, {
        type: 'success',
        showIcon: 'true'
      })
    }
    return {
      todos,
      handleCompleted,
      handleDelete,
      addTodo
    }
  }
}
</script>
<style></style>
