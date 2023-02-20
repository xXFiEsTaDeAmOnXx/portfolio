<script  lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name:'AboutMe',
  data:()=>{
    return {isBigger:(window.innerWidth>800)}
  },mounted(){
    addEventListener("resize", (event) => {
      this.isBigger = (window.innerWidth>800);
  });
  }
});
</script>

<template>
  <div class="text-center">
    <h2>School career</h2>
    <div class="flex justify-center mt-5">
      <div class="w-1/3 space-y-4 mr-4">
        <div class="border-black border-2 mt-44 mb-16 h-20 rounded-lg ">
          <p class="float-right pr-4">2018 - 2021</p>
          <h3 class="text-2xl mb-5">High-school diploma</h3>
          <p v-if="isBigger">Technisches Gymnasium Ravensburg</p>
        </div>
        <div class="border-black border-2 rounded-lg h-20">
          <p class="float-right pr-4">2012-2018</p>
          <h3 class="text-2xl mb-5 self-center">Secondary school</h3>
          <p v-if="isBigger">Realschule Wilhemsdorf</p>
        </div>
      </div>
      <div class="bg-black w-1 rounded-xl ">
        <span
          class="rounded-full bg-pink-700 w-4 h-4 block mt-16 -translate-x-1/3"
        ></span>
        <span
          class="rounded-full bg-pink-700 w-4 h-4 block mt-32 -translate-x-1/3"
        ></span>
        <span
          class="rounded-full bg-pink-700 w-4 h-4 block mt-32 -translate-x-1/3"
        ></span>
        <span
          class="rounded-full bg-pink-700 w-4 h-4 block mt-40 -translate-x-1/3"
        ></span>
      </div>
      <div class="w-1/3 ml-4">
        <div class="border-black border-2 mt-8 mb-96 rounded-lg h-20">
          <p class="float-right pr-4">2021 - untill now</p>
          <h3 class="text-2xl mb-5">University</h3>
          <p v-if="isBigger">Ravensburg-Weingarten University</p>
        </div>
        <div class="border-black border-2 rounded-lg mt-20 h-20">
          <p class="float-right pr-4">2008 - 2012</p>
          <h3 class="text-2xl mb-5">Elementary school</h3>
          <p v-if="isBigger">Grundschule Wittenhofen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
