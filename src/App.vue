<template>
  <div id="app">
    <headerblock />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import headerblock from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    headerblock,
  },
};
</script>

<style lang="sass">
</style>
