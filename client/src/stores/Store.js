import {defineStore} from 'pinia';

export const useStore = defineStore ('Store', {
  state: () => {
    return {
      token: null,
      user: null
    }
  },
  actions: {
    async setToken(token) {
      this.token = token;
    },
    async setUser(token) {
      this.user = token;
    }
  }
  // getters
})