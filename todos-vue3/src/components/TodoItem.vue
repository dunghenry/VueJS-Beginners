<template>
    <div>
        <div :class="['item', todo.completed && 'is-completed']"> 
            <input @change="handleChecked" :checked="todo.completed" type="checkbox">&nbsp;&nbsp;&nbsp;&nbsp;
            {{ todo.title }}&nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="handleDelete">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    name: 'TodoItem',
    setup(props, context) {
        const handleChecked = () =>{
            context.emit('handle-completed', props.todo.id)
        }
        const handleDelete = () =>{
            context.emit('handle-delete', props.todo.id)
        }
        return{
            handleChecked,
            handleDelete
        }
    },
    methods: {
        
    }
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

.is-completed{
    text-decoration: line-through;
}
</style>