import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// Vue.use(axios);

export default new Vuex.Store({
  state: {
    users: null,
    usersStartArray: null,
  },
  mutations: {
    //изменение переменных
    changeUsers(state, response, isFilterd = false) {
      console.log(response);
      if (isFilterd) {
        state.users = !response.length ? response.a : response;
      } else {
        state.usersStartArray = !response.length ? response.a : response;
        state.users = !response.length ? response.b : response;
      }
    },
  },
  actions: {
    //dispatch или сеттер
    async setUsers({ commit }) {
      console.log("set");
      const fetchUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const test = {
          a: fetchUsers.data,
          b: fetchUsers.data,
      }
      commit("changeUsers", test);
    },
    setFilterUsers({ commit }, filterArr  ) {
      commit("changeUsers", filterArr, true);
    },
  },
  getters: {
    //геттер (достает из state)
    getUsersRes(state) {
      return state.users ? state.users : null;
    },
  },
});
