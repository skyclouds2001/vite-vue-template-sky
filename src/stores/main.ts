import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    halfCount: (state) => state.count / 2,
  },
  actions: {
    increase() {
      ++this.count
    },
    decrease() {
      --this.count
    },
  },
})
