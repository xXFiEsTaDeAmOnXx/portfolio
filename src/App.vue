<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar></NavigationBar>
  <router-view></router-view>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
</style>
