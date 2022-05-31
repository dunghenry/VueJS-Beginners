<template>
  <div>
    <div class="todo-list" v-if="auth.isAuthenticated">
      <TodoItem v-for="todo in todos" :key="todo.id" v-bind:todo="todo"/>
  </div>
  <div v-else class="error">Not authenticated</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import TodoItem from './TodoItem.vue'
export default {
    name: "TodosComponent",
    components: {TodoItem},

    //C1
    // computed:{
    //   todos(){
    //     return this.$store.state.todos
    //   },
    //   isAuthenticated(){
    //     return this.$store.state.isAuthenticated
    //   }
    // }

    //C2
    // computed: mapState({
    //   todos: state => state.todos,
    //   isAuthenticated: state => state.auth.isAuthenticated
    // })

    //C3
    computed: mapState(['todos', 'auth'])
}
</script>

<style scoped>
.error{
  color: red;
  padding: 20px 0;
  font-weight: bold;
}
</style>