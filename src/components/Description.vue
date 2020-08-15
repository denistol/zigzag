<template>
  <div class="description wow animate__fadeInDown">
    <div class="description__box description__box-left">
      <h2 class="description__title">{{ description__title }}</h2>
      <ul class="description__text">
        <li class="description__list" v-for="t in description__text" v-bind:key="t.id">{{ t }}</li>
      </ul>
      <p class="description__contact">
        For details please contact us:
        <a href="Skype:live:sales_94558?chat">
          <img class="social__icon description__icon" src="src/assets/skype_y.svg" alt="skype" />
        </a>
        <a
          href="mailto:michaelGAVzigzagtraderDDOTcom"
          onclick="this.href=this.href.replace(/GAV/,'@').replace(/DDOT/,'.')"
        >
          <img class="social__icon description__icon" src="src/assets/email_y.svg" alt="email" />
        </a>
      </p>
    </div>
    <div class="description__box description__box-right">
      <img class="description__image" :src="description__image" alt="mt4" />
    </div>
  </div>
</template>

<script>
export default {
  name: "appdesc",
  props: ["description__title", "description__text", "description__image"],
};
</script>


