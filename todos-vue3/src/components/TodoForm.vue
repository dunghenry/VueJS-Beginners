<template>
  <div>
      <form @submit="handleSubmit">
          <div>
              <label>Title : </label>
              <input v-model="title" type="text"/>
          </div>
          <br>
          <div>
              <button>Add todo</button>
          </div>
      </form>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
    name: "TodoForm",
    setup(props, context){
        const title = ref('');
        const handleSubmit = (e) =>{
            e.preventDefault();
            const newTodo = {
                id: Math.floor(Math.random() * 10000),
                title: title.value,
                completed: false
            }
            if(title.value){
                context.emit('add-todo', newTodo);
            }
            title.value = ''
        }
        return{
            title,
            handleSubmit
        }
    }
}
</script>

<style>

</style>