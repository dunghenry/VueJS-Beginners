<template>
  <div id="app">
    <NavbarComponent />
    <TodosComponent />
    <ProgressBar />
    <StatusBarVue />
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import TodosComponent from "./components/Todos.vue";
import StatusBarVue from "./components/StatusBar.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    TodosComponent,
    StatusBarVue,
    ProgressBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
