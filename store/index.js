export const state = () => ({
  test: []
});

const nonReactiveState = state()

export const mutations = {
  pushSingleData (state, value) {
    // state = nonReactiveState // TEST
    const index = state.test.findIndex(c => c.code === value.code)
    if (index === -1) {
      state.test.push(value)
    } else {
      Object.assign(state.test[index], value)
    }
  }
};

export const actions = {
  pushData({ commit }) {
    for (let i = 0; i < 2470; i++) {
      const data = {
        code: 'test' + i,
        data: 'Some unique data ' + i
      };
      commit('pushSingleData', data)
    }
  }
};
