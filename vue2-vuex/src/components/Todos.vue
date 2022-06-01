<template>
  <div>
    <TodoForm/>
    <div class="todo-list" v-if="isAuthenticated">
      <TodoItem v-for="todo in todos" :key="todo.id" v-bind:todo="todo"/>
  </div>
  <div v-else class="error">Not authenticated</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue'
import TodoForm from './TodoForm.vue';
export default {
    name: "TodosComponent",
    components: {TodoItem, TodoForm},
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
    computed: {...mapGetters(['isAuthenticated', 'todos'])},
    created(){
      this.getTodos()
    },
    methods: {...mapActions(['getTodos'])}
}
</script>

<style scoped>
.error{
  color: red;
  padding: 20px 0;
  font-weight: bold;
}
</style>