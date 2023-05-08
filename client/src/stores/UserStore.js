import {defineStore} from 'pinia';

export const useUserStore = defineStore ('Store', {
  state: () => {
    return {
      token: null,
      user: null,
      isUserLoggedIn: false
    }
  },
  actions: {
    async setToken(token) {
      this.token = token;
      if (token) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      };
    },
    async setUser(token) {
      this.user = token;
    },
    // updateLoggedIn(token) {
    //   if (token) {
    //     this.isUserLoggedIn = true;
    //   } else {
    //     this.isUserLoggedIn = false;
    //   }
    // }
  }
})