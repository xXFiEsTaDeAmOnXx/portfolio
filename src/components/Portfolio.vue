<script setup lang="ts">
defineProps<{
  topic: string;
}>();
</script>

<template>
  <div class="text-center  bg-[url('../assets/wave-portfolio.svg')] bg-center bg-cover min-h-screen flex items-center	 justify-center">
    <div>
    <h1 class="text-center text-4xl">{{ topic }}</h1>
    <div class="border-black border-2 rounded-lg  mt-10 bg-neutral-900 p-5"  data-aos="fade-right" >
      <h2 class="text-2xl">Seminar course - Design-revision</h2>
      <p>
        In cooperation with SAP we did a seminar course. For this course, 
        I and two classmates used HTML, CSS and JS to develop a website to maintain and comment on promotional flyers.
      </p>

      <a class="m-10" href="https://github.com/Jo0001/design-revision">
        <img class="inline" src="../assets/github.svg" alt="GitHub"
      /></a>
    </div>
    <div class="border-black border-2 rounded-lg mt-10 bg-neutral-900 p-5"  data-aos="fade-right" data-aos-delay="50">
      <h2 class="text-2xl">Grafical user interfaces - LoanLibrary</h2>
      <p>
        In university, I and a partner had to do a project with Vue for the
        module grafical user interfaces. We also wrote a backend with node.js.
      </p>
      <a class="m-10" href="https://github.com/Skydeke/LoanLibrary">
        <img class="inline" src="../assets/github.svg" alt="GitHub"
      /></a>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
