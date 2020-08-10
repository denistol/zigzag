<template>
  <footer class="footer">
    <span class="footer__span">{{ rights }}</span>
    <!-- © 2020 ZigZag. All rights reserved -->
    <span class="footer__span">
      {{ create }}
      <a :href="url">{{ name }}</a>
      <!-- Create by -->
      <!-- PELEV1N -->
      <!-- https://linkedin.com/in/pelev1n/ -->
    </span>
  </footer>
</template>

<script>
export default {
  props: ["rights", "create", "url", "name"],
};
</script>