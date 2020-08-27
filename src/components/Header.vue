<template>
  <header class="header">
    <div class="logo">
      <a href="#">
        <img :src="$getAsset('logo.png')" />
      </a>
    </div>
    <div class="contacts">
      <a class="social" href="Skype:live:sales_94558?chat">
        <img class="social__icon" :src="$getAsset('skype_y.svg')" alt="skype" />
      </a>
      <a
        class="social"
        href="mailto:michaelGAVzigzagtraderDDOTcom"
        onclick="this.href=this.href.replace(/GAV/,'@').replace(/DDOT/,'.')"
      >
        <img class="social__icon" :src="$getAsset('email_y.svg')" alt="email" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerblock",
};
</script>