<script>
import AuthenticationService from '@/services/AuthenticationService';
import { useUserStore } from '../stores/UserStore';
import PanelComponent from '../components/PanelComponent.vue';

  export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    data() {
        return {
            email: "",
            password: "",
            error: null
        };
    },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                });
                await this.userStore.setToken(response.data.token);
                await this.userStore.setUser(response.data.user);
            }
            catch (error) {
                this.error = error.response.data.error;
            }
        }
    },
    components: { PanelComponent }
}
</script>

<template>
  <PanelComponent title="Register">
    <v-text-field 
      label="Email" 
      variant="underlined"
      v-model="email"
    ></v-text-field>
    <v-text-field 
      label="Password" 
      type="password"
      variant="underlined"
      v-model="password"
    ></v-text-field>
    <br>
    <div class="error" v-html="error" />
    <v-btn
      class="cyan"
      @click='register'
    >
      Register
    </v-btn>
  </PanelComponent>
</template>

<style scoped>
.error {
  color: red;
}
.v-layout {
  margin-top: 10vh;
  justify-content: center;
}
.v-toolbar {
  height: auto;
  margin-bottom: 3vh;
}
.v-toolbar-title {
  font-size: 48px;
  line-height: inherit;
}
.v-text-field {
  width: 50vw;
}
.v-btn {
  margin-bottom: 2vh;
}
.v-toolbar__content > .v-toolbar-title {
    margin-inline-start: 0;
}
</style>