<template>
  <div class="navbar">
		<h1>My Vuex App Todos</h1>
		<ul>
			<li>Home</li>
			<li>About</li>
			<li v-if="auth.isAuthenticated">
				Total todos: {{ todos.length }}
				<button @click="handleLogout">Logout</button>
			</li>
			<button v-else @click="handleLogin">Login</button>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "NavbarComponent",
	//C1
	// computed:{
	// 	todos(){
	// 		return this.$store.state.todos
	// 	},
	// 	isAuthenticated(){
	// 		return this.$store.state.isAuthenticated
	// 	}
	// }

	//C2
	// computed: mapState({
	// 	todos: state => state.todos,
	// 	isAuthenticated: state => state.isAuthenticated
	// })

	//C3
	computed: mapState(['todos', 'auth']),
	methods:{
		handleLogin(){
			this.auth.isAuthenticated = true;
		},
		handleLogout(){
			this.auth.isAuthenticated = false;
		}
	}
}
</script>

<style scoped>
.navbar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}
.navbar ul {
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	padding: 0;
}
</style>