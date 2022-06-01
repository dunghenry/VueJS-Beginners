<template>
    <div>
        <div :class="['item', todo.completed && 'completed']">
            <!-- <input type="checkbox" :checked="todo.completed" @change="handleChange(todo.id)">&nbsp;&nbsp;&nbsp;&nbsp; -->
            <input type="checkbox" :checked="todo.completed" @change="HANDLE_CHANGE(todo.id)">&nbsp;&nbsp;&nbsp;&nbsp;
            {{ todo.title }}&nbsp;&nbsp;&nbsp;&nbsp;
            <!-- <button @click="handleDelete(todo.id)">Delete</button> -->
            <!-- <button @click="DELETE_TODO(todo.id)">Delete</button> -->
            <button @click="deleteTodo(todo.id)">Delete</button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props: ['todo'],
    methods: {...mapMutations(['HANDLE_CHANGE', 'DELETE_TODO']),
        deleteTodo(id){
            console.log(id)
            this.$store.dispatch('deleteTodo',id)
        }
    }
    // methods: {
    //     handleChange(id) {
    //         this.$store.commit('HANDLE_CHANGE', id);
    //     },
    //     handleDelete(id) {
    //         this.$store.commit('DELETE_TODO', id);
    //     }
    // }
}
</script>

<style scoped>
p {
    display: flex;
}

.item {
    margin: 20px 0px;
}

button {
    cursor: pointer;
    border-radius: 4px;
}

input[type="checkbox"] {
    -ms-transform: scale(1.5);
    /* IE */
    -moz-transform: scale(1.5);
    /* FF */
    -webkit-transform: scale(1.5);
    /* Safari and Chrome */
    -o-transform: scale(1.5);
    /* Opera */
    transform: scale(1.5);
    padding: 10px;
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
}
</style>