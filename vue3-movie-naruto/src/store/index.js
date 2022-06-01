import { createStore } from 'vuex';

const store = createStore({
    state: {
        movies: []
    },
    mutations: {
        GET_MOVIES(state, data) {
            state.movies = data
        }
    }
})
export default store