var app = new Vue({
  template: `<div>
      <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Nhập username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Nhập địa chỉ email">
        </template>
        <br>
        <br>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Nhập username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Nhập địa chỉ email" key="email-input">
        </template>
        <br>
        <br>
        <button v-on:click="changeLogin">Click me!</button>
        <h1 v-show="isShow">Xin chao</h1>
        <ul>
            <li v-for="item in items">{{item.name}}</li>
        </ul>
        <ul>
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.name }}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key) in objects">
               {{key}} - {{value}}
            </li>
        </ul>
  </div>`,
  el: '#app',
  data: {
    loginType: 'username',
    isShow: false,
    parentMessage: 'Parent',
    items: [
      {id: 1, name: 'Cà phê' },
      {id: 2, name: 'Trà đặc' },
      {id: 3, name: 'Bò húc' }
    ],
    objects: {
      firstName: "Tran",
      lastName: "Dung",
      age: 21,
    }
  },
  methods: {
    changeLogin() {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      }
      else {
        this.loginType = 'username'
      }
    }
  }
})

