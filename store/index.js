import Vue from 'vue'

export const state = () => ({
  test: []
});

const nonReactiveState = state()
const vueReactive =  {}
Vue.set(vueReactive, 'state', state())

export const mutations = {
  pushSingleData (state, value) {
    // state = nonReactiveState // TEST
    // state = vueReactive.state // TEST
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
