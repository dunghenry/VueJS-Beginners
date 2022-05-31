<template>
  <div id="app">
    <TheHeader/>
    <TheTodos/>
  </div>
</template>

<script>
import TheHeader from './components/Header.vue'
import TheTodos from './components/Todos.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheTodos
  }
}
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
