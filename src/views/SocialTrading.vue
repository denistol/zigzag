<template>
  <div class="hero">
    <div class="heading">
      <div class="heading__box heading__box-left">
        <img class="mokup" :src="$getAsset('mokup.png')" alt="mokup" />
      </div>
      <div class="heading__box heading__box-right">
        <h1 class="heading__title">{{ title_h1 }}</h1>
        <h3 class="heading__text">{{ text_h3 }}</h3>
        <a class="button">Demo</a>
      </div>
    </div>

    <appsocial
      :title="item.title"
      :text="item.text"
      :button="item.button"
      :video="item.video"
      v-for="item in items"
      :key="item.id"
    ></appsocial>
  </div>
</template>

<script>
import Social from "@/components/Social.vue";
export default {
  name: "socialTrading",
  data() {
    return {
      title_h1: "ZigZag Social Trading",
      text_h3: `Social Trading Platform with multy mt4 broker support to allow investors make money
      following traders. Brokers or service providers can make money per commission and per profit from copied trades.
      Traders available for commission share from trades and monthly investors profit.`,
      items: [
        {
          title: "Ability to add any mt4 account",
          text: [
            "Can add any mt4 account as investor or broker without need manager api or server api.",
            "For brokers where mt4 manager api available ability to pay commission from mt4 account.",
            " Ability to top up wallet balance to pay commission for order copy and profit share.",
            "Supported Bitcoin deposit and withdrawals from/to wallet.",
            "Support of internal accounts with ability to trade or invest.",
            "Transfer of wallet balance between accounts.",
            "Ability to add multiple trader/investor accounts per user.",
          ],
          button: false,
          video: "slide_1.mp4",
        },
        {
          title: "Advanced statistic for accounts and traders",
          text: [
            "Statistic per trader.",
            "Statistic per symbols.",
            "Statistic per currencies.",
            "ROI and profit statistics.",
            "Trader Rate statistic.",
          ],
          button: false,
          video: "slide_2.mp4",
        },
        {
          title: "Top Traders page",
          text: [
            "Ability to see top traders.",
            "Ability to see public profile for each trader.",
          ],
          button: false,
          video: "slide_3.mp4",
        },
        {
          title: "Ability to Follow or Modify your Portfolio",
          text: [
            "Ability to Follow/ Modify/Unfollow Traders for investor.",
            "Ability to manage portfolio.",
            "Smart mapping for symbols for copy.",
            "Ability to add manually mapping or change existing one.",
            "Lots, trades and loose limits. When exceed orders stop to copy.",
          ],
          button: false,
          video: "slide_4.mp4",
        },
        {
          title: "Account & Notification",
          text: [
            "Upload avatar and background image for account.",
            "Edit mt4 account credentials or remove account.",
            "Smart Notifications.",
            "Email Notifications over SendGrid integration.",
          ],
          button: false,
          video: "slide_5.mp4",
        },
        {
          title: "ZigZag CRM Integration",
          text: [
            "Integrated with ZigZag CRM.",
            "Ability to work as client Area for CRM.",
          ],
          button: true,
          video: "slide_6.mp4",
        },
      ],
    };
  },
  components: {
    appsocial: Social,
  },
};
</script>