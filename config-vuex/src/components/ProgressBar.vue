<template>
  <div>
    <p class="progress-bar" v-if="isAuthenticated">Progress: {{ progress }}%</p>
  </div>
</template>

<script>
export default {
    name: "ProgressBar",
    computed:{
        progress(){
            const todos = this.$store.state.todos;
            const doneTodos = todos.filter(todo => todo.completed);
            const result = Math.round((doneTodos.length/todos.length)* 100)
            return result;
        },
        isAuthenticated(){
            return this.$store.state.auth.isAuthenticated
        }
    }
}
</script>

<style>
.progress-bar {
	padding: 5px;
	text-align: center;
	background: rgb(106, 248, 118);
	color: black;
}
</style>