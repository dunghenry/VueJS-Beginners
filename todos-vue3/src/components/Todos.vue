<template>
  <div>
      <TodoForm @add-todo="addTodo"/>
      <TodoItem v-for="(todo) in todos" :key='todo.id' v-bind:todo="todo" @handle-completed="handleCompleted" @handle-delete="handleDelete" />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoItem from './TodoItem.vue';
import {ref} from 'vue';
export default {
    name: 'TheTodos',
    components: { TodoItem, TodoForm },
    setup(){
        const todos = ref([
            {
            id: 1,
            title: 'Công việc 1',
            completed: true
            },
            {
            id: 2,
            title: 'Công việc 2',
            completed: false
            },

        ]);
        const handleCompleted = (id) =>{
             todos.value.map(todo =>{
                if(todo.id === id) todo.completed = !todo.completed
                return todo;
            });
        }
        const handleDelete = (id) =>{
            todos.value = todos.value.filter(todo => todo.id !== id)
        }
        const addTodo = (data) =>{
            todos.value = [data, ...todos.value];
        }
        return{
            todos,
            handleCompleted,
            handleDelete,
            addTodo
        }
    }
}
</script>

<style>

</style>