import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    token: null,
    // gerer le isAdmin
    isAdmin: null,
    // gere le userid
    userid: null,
  },
  getters: {
    isLogged: (state) => {
      return state.token !== null;
    },
  },
  mutations: {
    login(state, payload) {
      state.token = payload.token;
      state.isAdmin = payload.isadmin;
      state.userid = payload.userid;
    },

    logout(state) {
      state.token = null;
      state.isAuth = null;
      localStorage.removeItem("GroupomaniaToken")
      router.push("/login");
    },
  },
  actions: {},
  modules: {},
});
