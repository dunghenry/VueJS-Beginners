Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
  template: `<div>
  <h1 v-bind:title="message"> {{message}}</h1>
        <p v-if="isDisplay">Đây là nội dung cần hiển thị</p>
        <ul>
            <li v-for="todo in todos">{{todo.title}}</li>
        </ul>
        <button v-on:click="reverseMessage">Click me!</button>
        <br>
        <br>
        <input v-model="message">
        <ul>
            <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
        </ul>
        <span v-once>Thông điệp này sẽ không bao giờ thay đổi: {{ message }}</span>
        <br>
        <br>
        <button @click="handleButton">Change button</button>
        <br>
        <br>
        <button v-bind:disabled="isButtonDisabled">Hi</button>
        <img v-bind:src="'./day01/images/avatar.jpg'">

        <form v-on:submit.prevent="onSubmit"> 
            <button type="submit">Submit</button>
        </form>
        {{fullName}}
  </div>`,
  el: '#app',
  data: {
    message: 'Hello Vue ' + new Date().toLocaleString(),
    isDisplay: true,
    isButtonDisabled: true,
    firstName: "Tran",
    lastName: "Dung",
    count: 0,
    avatar: './images/avatar.jpg',
    todos: [
      { title: 'Học JavaScript' },
      { title: 'Học VueJS' },
      { title: 'Học NodeJS' }
    ],
    groceryList: [
    { id: 0, text: 'Cà pháo' },
    { id: 1, text: 'Mắm tôm' },
    { id: 2, text: 'Miễn ăn được là được' }
  ],
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split(' ').reverse().join(' ');
    },
    handleButton() {
      this.isButtonDisabled = !this.isButtonDisabled;
    },
    onSubmit() {
      console.log("Hi");
    }
  },
  created() {
    console.log("Created")
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
})

