import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        isAuth: false,
    },
    getters: {
        isAuth(state) {
            return state.isAuth;
        },
    },
    mutations: {
        SET_AUTH(state, auth) {
            state.isAuth = auth;
        },
    },
    actions: {
        isLoggedIn({ commit }, state) {
            commit("SET_AUTH", state);
        },
    },
});
