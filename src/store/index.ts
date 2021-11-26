import { createStore } from "vuex";

const store = createStore({
  //用来保存数据
  state() {
    return {
      count: 2,
    };
  },
  //用来改变共享的数据
  mutations: {
    increment(state) {
      // @ts-ignore
      state.count++;
    },
  },
});

export default store;
