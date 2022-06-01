import Vue from 'vue'
import Vuex from 'vuex';
import todoModule from './modules/todos';
import moduleAuth from './modules/auth';
Vue.use(Vuex);
const storeData = {
    modules: {
        auth: moduleAuth,
        todos: todoModule
    },
    
}
const store = new Vuex.Store(storeData);
export default store;