export default {
  state: {
    modal: false,
  },
  mutations: {
    changeModal(state, response){
        state.modal = response;
    }
  },
  actions: {
    updateModalValue({ commit }, payload) {
      commit("changeModal", payload);
    },
  },
  getters: {
    getModal: (state) => {
      return state.modal;
    },
  },
};
