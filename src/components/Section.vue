<script setup lang="ts">
import AboutMe from "./AboutMe.vue";
import Portfolio from "./Portfolio.vue";
import Contact from "./Contact.vue";

defineProps<{
  topic: string;
}>();
</script>

<template>
  <section :id="topic.replace(' ', '')" class="my-40">
    <div
      class="container mx-auto rounded-xl m-4 pl-4 pr-4 pt-2 pb-2 bg-neutral-900 text-gray-200"
    >
      <h1 class="text-center text-4xl">{{ topic }}</h1>
      <AboutMe v-if="topic == 'About Me'"></AboutMe>
      <Portfolio v-if="topic == 'Portfolio'"></Portfolio>
      <Contact v-if="topic == 'Contact'"></Contact>
    </div>
  </section>
</template>

<style scoped></style>
