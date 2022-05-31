<template>
    <div>
        <div :class="['item', todo.completed && 'is-completed']"> 
            <input @change="handleChecked" :checked="todo.completed" type="checkbox">
            <span>
                <span class="title">{{ todo.title }}</span>
            </span>
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
            context.emit('handle-completed', props.todo._id)
        }
        const handleDelete = () =>{
            context.emit('handle-delete', props.todo._id)
        }
        return{
            handleChecked,
            handleDelete
        }
    },
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
    float: right;
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
    float: left;
}

.is-completed{
    text-decoration: line-through;
}
span.title {
    font-weight: bold;
}
</style>