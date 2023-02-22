<script lang="ts">
import Section from ".././components/Section.vue";
import VueScrollTo from "vue-scrollto";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      topics: ["About Me", "Portfolio", "Contact"],
    };
  },
  components: {
    Section,
  },
  methods: {
    scrollDown() {
      VueScrollTo.scrollTo("#AboutMe", 500, {
        easing: "ease-in-out",
        offset: -100,
      });
    },
  },
  updated() {
    if (this.$route.hash) {
      VueScrollTo.scrollTo(this.$route.hash, 500, {
        easing: "ease-in-out",
        offset: -100,
      });
    } // offset becuase of the navbar
  },
});
</script>

<template>
  <div id="Home" class="bg-black">
    <div class="h-screen text-gray-200 flex items-center justify-center bg-[url('../assets/wave-home.svg')] bg-cover	 bg-center">
      <div>
        <div class="text-center text-3xl">
          <p>
            Hi. I am
            <span class="motion-safe:animate-pulse text-pink-700 z-50"
              >Niklas Kleiser.</span
            >
          </p>
          <p>I am a student at Ravensburg Weingarten University in Germany.</p>
          <p>In my free time, I like coding.</p>
        </div>
        <div
          @click="scrollDown"
          class="border-pink-700 hover:cursor-pointer text-center mt-60 text-3xl text-pink-700 rounded-md border-2 motion-safe:animate-bounce"
        >
          Scroll down
        </div>
      </div>
    </div>
    <div v-for="topic in topics" :key="topic">
      <Section :topic="topic"></Section>
    </div>
  </div>
</template>

<style scoped></style>
