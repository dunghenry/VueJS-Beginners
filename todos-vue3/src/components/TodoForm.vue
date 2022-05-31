<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <div>
              <label>Title : </label>
              <input ref="inputRef" v-model="title" type="text"/>
          </div>
          <br/>
          <div>
              <label>Des : </label>
              <input v-model="description" type="text"/>
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
        const description = ref('');
        const inputRef =  ref(null);
        const handleSubmit = () =>{
            const newTodo = {
                title: title.value,
                description: description.value,
                completed: false
            }
            if(title.value){
                context.emit('add-todo', newTodo);
            }
            title.value = '';
            description.value = '';
            inputRef.value.focus();
        }
        return{
            title,
            description,
            inputRef,
            handleSubmit
        }
    }
}
</script>

<style scoped>
button{
    cursor: pointer;
}
</style>