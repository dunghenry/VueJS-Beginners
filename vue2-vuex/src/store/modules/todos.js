import axios from "axios";
const todoModule = {
    state: {
        todos: [],
    },
    getters: {
        todos: state => state.todos,
        doneTodos: state => state.todos.filter(todo => todo.completed),
        progress: (state, getters) => {
            const todos = state.todos;
            const doneTodos = getters.doneTodos;
            let result = Math.round((doneTodos.length / todos.length) * 100)
            return result || 0;
        }
    },
    mutations: {
        HANDLE_CHANGE(state, id) {
            state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        ADD_TODO(state, data) {
            state.todos = [...state.todos, data]
        },
        GET_TODOS(state, data){
            state.todos = data
        }
    },
    actions: {
        async deleteTodo(context, id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                context.commit('DELETE_TODO', id)
            } catch (error) {
                console.log(error)
            }
        },
        async addTodo(context, data) {
            try {
                await axios.get("https://jsonplaceholder.typicode.com/todos", data)
                context.commit('ADD_TODO', data)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodos(context) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
                context.commit('GET_TODOS', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
export default todoModule;