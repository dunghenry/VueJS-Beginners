<template>
  <div class="todo-form" v-if="isAuthenticated">
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Title : </label>
        <input ref="inputRef" type="text" v-model="title" />
      </div>
      <br />
      <div>
        <button type="submit">Add todo</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },
  computed: {...mapGetters(['isAuthenticated']) },
  methods: {
    ...mapActions["addTodo"],
    handleSubmit() {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        completed: false,
      };
      if (this.title) {
        this.$store.dispatch("addTodo", todo);
      }
      this.title = "";
      this.$refs.inputRef.focus();
    },
  },
};
</script>

<style scoped>
.todo-form {
  margin-top: 20px;
}
</style>
