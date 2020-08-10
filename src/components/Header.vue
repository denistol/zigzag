<template>
  <div>
    <header class="header">
      <div class="logo">
        <a :href="url">
          <!-- src/assets/logo.png -->
          <img :src="logo_src" />
        </a>
      </div>
      <div class="contacts">
        <a class="social" :href="skype">
          <!-- Skype:live:sales_94558?chat -->
          <img class="social__icon" :src="skype_logo" alt="skype" />
          <!-- src/assets/skype_y.svg -->
        </a>
        <a
          class="social"
          :href="mail"
          onclick="this.href=this.href.replace(/GAV/,'@').replace(/DDOT/,'.')"
        >
          <!-- mailto:michaelGAVzigzagtraderDDOTcom -->
          <img class="social__icon" :src="mail_logo" alt="email" />
          <!-- src/assets/email_y.svg
          props: ["url", "logo_src", "skype", "skype_logo", "mail", "mail_logo"],-->
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "headerblock",
  data() {
    return {
      url: "#",
      logo_src: "@/assets/logo.png",
      skype: "Skype:live:sales_94558?chat",
      skype_logo: "@/assets/skype_y.svg",
      mail: "mailto:michaelGAVzigzagtraderDDOTcom",
      mail_logo: "@/assets/email_y.svg",
    };
  },
};
</script>