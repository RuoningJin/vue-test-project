<script setup>
defineProps ({
  title: String,
})
</script>

<template>
  <v-layout column align="center">
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan">
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt=2 pb=2">
        <slot>
        
        </slot>
      </div>
    </div>
  </v-layout>
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