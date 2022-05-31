<template>
 <div class="status-bar" v-if="isAuthenticated">
		<p>Done</p>
		<ul>
            <!-- C1 -->
			<!-- <li v-for="todo in todos.filter(todo => todo.completed)" :key="todo.id">
				{{todo.title}}
			</li> -->

            <!-- C2 -->
			<li v-for="todo in doneTodos" :key="todo.id">
				{{todo.title}}
			</li>
		</ul>
	</div>
</template>

<script>
// import {mapState} from 'vuex';
export default {
    //C1
    name: "StatusBarVue",
    // computed: mapState(['todos']),
    computed:{
        doneTodos(){
            return this.$store.state.todos.filter(todo=> todo.completed)
        },
        isAuthenticated(){
            return this.$store.state.auth.isAuthenticated
        }
    }
}
</script>

<style>
.status-bar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}
</style>