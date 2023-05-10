<script setup>
import { onMounted } from 'vue';
import PanelComponent from './PanelComponent.vue';
import SongsService from '../services/SongsService';
let songs = null;

onMounted(() => {
  songs = SongsService.index();
})
</script>

<template>
  <PanelComponent title="Songs">
    <li v-for="song in songs" :key="song.title">
      {{ song.title }} -
      {{ song.artist }} -
      {{ song.album }}
    </li>
  </PanelComponent>
</template>

<style scoped>

</style>