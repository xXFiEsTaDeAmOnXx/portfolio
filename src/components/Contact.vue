<script setup lang="ts">
defineProps<{
  topic: string;
}>();
</script>

<template>
  <div class="text-center bg-neutral-900 h-44 flex items-center justify-center">
    <div>
    <h1 class="text-center text-4xl">{{ topic }}</h1>
    <p class="text-center">You can conntact me on the following media:</p>
      <a class="m-10" href="https://github.com/Skydeke/LoanLibrary">
        <img class="inline" src="../assets/github.svg" alt="GitHub"
      /></a>
      <a class="m-10" href="https://de.linkedin.com/in/niklas-kleiser-586aa3223">
        <img class="inline" src="../assets/linkedIn.svg" alt="LinkedIn"
      /></a>
      <a class="m-10" href="mailto:niklas.kleiser@web.de">
        <img class="inline" src="../assets/email.svg" alt="E-Mail"
      /></a>
    </div>
  </div>
</template>

<style scoped></style>
