<template>
  <div class="content">
    <div class="content__box content__box-left wow animate__fadeInUpBig">
      <h2 class="title">{{ title }}</h2>
      <ul class="text">
        <li class="text__list" v-for="t in text" v-bind:key="t.id">{{ t }}</li>
      </ul>
      <a class="button" v-if="button">Go to product</a>
    </div>
    <div class="content__box content__box-right wow animate__fadeInUpBig">
      <video class="video" autoplay loop muted>
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "appsocial",
  props: ["title", "text", "button", "video"],
};
</script>