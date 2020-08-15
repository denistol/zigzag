<template>
  <footer class="footer">
    <span class="footer__span">{{ rights }}</span>
    <span class="footer__span">
      {{ create }}
      <a :href="url">{{ name }}</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: "footerblock",
  data() {
    return {
      rights: "© 2020 ZigZag. All rights reserved",
      create: "Create by",
      url: "https://linkedin.com/in/pelev1n/",
      name: "PELEV1N",
    };
  },
};
</script>