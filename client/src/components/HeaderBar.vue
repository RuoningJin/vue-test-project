<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
const userStore = useUserStore();
</script>
<template>
<v-card
    class="mx-auto"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        color="rgb(238, 238, 238)"
        density="compact"
      >
        <!-- <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

        <v-app-bar-title>
          <RouterLink to="/">
            <span>
              TestApp
            </span>
          </RouterLink>
        </v-app-bar-title>
        
        <nav>
          <RouterLink to="/login">
            <v-btn
            v-if="!userStore.isUserLoggedIn"
            >
              LogIn
            </v-btn>
          </RouterLink>
          <RouterLink to="/register">
            <v-btn
            v-if="!userStore.isUserLoggedIn"
            >
              Sign Up
            </v-btn>
          </RouterLink>
        </nav>
        <!-- <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template> -->
      </v-app-bar>

    </v-layout>
  </v-card>
</template>

<style>
  .v-card {
    z-index: 9999 !important;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>