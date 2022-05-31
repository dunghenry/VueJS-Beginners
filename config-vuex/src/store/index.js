import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const storeData = {
    state: {
        todos: [
            {
                id: 1,
                title: "Cong viec 1",
                completed: true,
            },
            {
                id: 2,
                title: "Cong viec 2",
                completed: false,
            },
            {
                id: 3,
                title: "Cong viec 3",
                completed: false,
            }
        ],
        auth: {
            isAuthenticated: false
        }
    }
}

const store = new Vuex.Store(storeData);
export default store;