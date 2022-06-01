const moduleAuth = {
    state: {
        auth: {
            isAuthenticated: false
        }
    },
    getters: {
        isAuthenticated: state => state.auth.isAuthenticated,
    },
    mutations: {
        LOGIN(state) {
            state.auth.isAuthenticated = true;
        },
        LOGOUT(state) {
            state.auth.isAuthenticated = false;
        },
    }

}

export default moduleAuth