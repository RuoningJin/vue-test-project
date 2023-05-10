<script setup>
import { ref, onMounted } from 'vue';
import PanelComponent from './PanelComponent.vue';
import SongsService from '../services/SongsService';

const songs = ref([]);
onMounted(async () => {
  songs.value = (await SongsService.index()).data;
})
</script>

<template>
  <PanelComponent title="Songs">
    <ul v-for="song in songs" :key="song.id">
      {{ song.title }} -
      {{ song.artist }} -
      {{ song.album }}
    </ul>
  </PanelComponent>
</template>

<style scoped>

</style>