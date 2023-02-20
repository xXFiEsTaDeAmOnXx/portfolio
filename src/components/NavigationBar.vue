<script setup lang="ts"></script>

<template>
  <nav class="fixed w-full z-10">
    <div class="flex bg-gray-200 m-0 justify-between items-center">
      <div>
        <img src="../assets/logo.png" class="h-20 w-20" />
      </div>

      <div class="flex justify-between space-x-10 mr-10">
        <router-link
          to="/#Home"
          class="hover:text-pink-700 hover:cursor-pointer"
          >Home</router-link
        >
        <router-link
          to="/#AboutMe"
          class="hover:text-pink-700 hover:cursor-pointer"
          >About Me</router-link
        >
        <router-link
          to="/#Portfolio"
          class="hover:text-pink-700 hover:cursor-pointer"
          >Portfolio</router-link
        >
        <router-link
          to="/#Contact"
          class="hover:text-pink-700 hover:cursor-pointer"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
