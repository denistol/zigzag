<template>
  <a class="block" href="#">
    <img class="block__img" src="@/assets/trading.svg" alt="#" />
    <div class="block__title">{{ block__title }}</div>
    <div class="block__text">{{ block__text }}</div>
  </a>
</template>

<script>
export default {
  name: "appblock",
  props: ["url", "block__img", "block__title", "block__text"],
};
</script>