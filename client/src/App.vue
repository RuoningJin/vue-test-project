<script setup>
import { RouterView } from "vue-router";
import HeaderBar from './components/HeaderBar.vue';
import { useStore } from "./stores/Store";
useStore();
</script>

<template>
  <HeaderBar />
  <RouterView />
</template>
