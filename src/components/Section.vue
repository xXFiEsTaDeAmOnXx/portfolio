<script setup lang="ts">
import AboutMe from "./AboutMe.vue";
import Portfolio from "./Portfolio.vue";
import Contact from "./Contact.vue";

defineProps<{
  topic: string;
}>();
</script>

<template>
  <section :id="topic.replace(' ', '')">
    <div
      class="text-gray-200"
    >
      
      <AboutMe v-if="topic == 'About Me'" :topic="topic"></AboutMe>
      <Portfolio v-if="topic == 'Portfolio'" :topic="topic"></Portfolio>
      <Contact v-if="topic == 'Contact'" :topic="topic"></Contact>
    </div>
  </section>
</template>

<style scoped></style>
