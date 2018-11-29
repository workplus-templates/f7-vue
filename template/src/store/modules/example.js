const state = {
  count: 1,
};

const getters = {
  getCount: (state) => state.count,
};

const actions = {
  increase({ commit }) {
    commit('increase');
  },
  decrease({ commit }) {
    commit('decrease')
  },
};

const mutations = {
  increase(state) {
    state.count += 1;
  },
  decrease(state) {
    state.count -= 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

