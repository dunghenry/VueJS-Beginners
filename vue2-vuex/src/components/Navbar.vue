<template>
  <div class="navbar">
		<h1>My Vuex App Todos</h1>
		<ul>
			<li>Home</li>
			<li>About</li>
			<li v-if="isAuthenticated">
				Total todos: {{ todos.length }}
				<!-- <button @click="handleLogout">Logout</button> -->
				<button @click="LOGOUT">Logout</button>
			</li>
			<!-- <button v-else @click="handleLogin">Login</button> -->
			<button v-else @click="LOGIN">Login</button>
		</ul>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
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
	computed:{...mapGetters(['isAuthenticated', 'todos'])},

	//C1
	// methods:{
	// 	handleLogin(){
	// 		this.auth.isAuthenticated = true;
	// 	},
	// 	handleLogout(){
	// 		this.auth.isAuthenticated = false;
	// 	}
	// }


	//C2
	// methods:{
	// 	handleLogin(){
	// 		this.$store.commit('LOGIN')
	// 	},
	// 	handleLogout(){
	// 		this.$store.commit('LOGOUT')
	// 	}
	// }

	//C3
	methods: mapMutations(['LOGIN', 'LOGOUT'])
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