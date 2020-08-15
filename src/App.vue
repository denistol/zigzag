<template>
  <div id="app">
    <div class="container">
      <headerblock />
      <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      </div>-->
      <router-view />
      <footerblock />
    </div>
  </div>
</template>

<script>
import headerblock from "@/components/Header.vue";
import footerblock from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    headerblock,
    footerblock,
  },
};
</script>

<style lang="sass">
</style>
