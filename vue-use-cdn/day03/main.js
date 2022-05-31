const app = Vue.createApp({
    template:  `<h1>Xin chao {{firstName}} {{lastName}}</h1>
        <button v-on:click="handleFirstName">Change firstName</button>
        <button @click="removeFirstName">Remove firstName</button>
        <br>
        <p v-if="isShow">Xin chao</p>
        <button @click="toggleIsShow">Toggle isShow</button>
        `,
    data() {
        return {
            message: "Hello cac ban",
            firstName: "Tran",
            lastName: "Dung",
            isShow: true
        }
    },
    methods: {
        handleFirstName() {
            if (this.firstName === "Tran") {
                this.firstName = "Quach";
            }
            else if (this.firstName === "Quach") {
                this.firstName = 'Tran';
            }
        },
        removeFirstName() {
            this.firstName = '';
        },
        toggleIsShow() {
            this.isShow = !this.isShow;
        }
    }
})

app.mount('#app')