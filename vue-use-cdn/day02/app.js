Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
    props: ['title']
})
//$emit("remove") truyen su kien ra ngoai component
var app = new Vue({
    template: `<div>
        <input
    ref="input"
    v-model="title"
    v-on:keyup.enter="addNewTodo"
    placeholder="Thêm việc cần làm"
  >
  <ul>
    <todo-item  
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="remove(index)"
    >
        {{todo.title}}
    </todo-item>
    
  </ul>
    </div>`,
    el: '#app',
    data: {
        title: '',
        todos: [
            {
                id: 1,
                title: 'luộc khoai',
            },
            {
                id: 2,
                title: 'cùng chị giã gạo',
            },
            {
                id: 3,
                title: 'thổi cơm'
            },
            {
                id: 4,
                title: 'nhổ cỏ vườn'
            }
        ],
    },
    methods: {
        remove: function (index) {
            this.todos.splice(index, 1)
        },
        addNewTodo() {
            const todo = {
                id: Math.floor(Math.random() * 100000),
                title: this.title
            }
            this.todos.push(todo);
            this.title = ''
            this.$refs.input.focus();
        }
    }
})