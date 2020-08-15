<template>
  <main class="main">
    <div class="heading">
      <div class="heading__box heading__box-left"></div>
      <div class="heading__box heading__box-right">
        <h1 class="heading__title">{{ heading__title }}</h1>
      </div>
    </div>

    <div class="blocks">
      <appblock
        :url="item.url"
        :block__img="item.block__img"
        :block__title="item.block__title"
        :block__text="item.block__text"
        v-for="item in items_block"
        :key="item.id"
      />
    </div>

    <appdesc
      :description__title="item.description__title"
      :description__text="item.description__text"
      :description__image="item.description__image"
      v-for="item in items_description"
      :key="item.id"
    />
  </main>
</template>

<script>
import Blocks from "@/components/Blocks.vue";
import Description from "@/components/Description.vue";
export default {
  name: "indexPage",
  data: function () {
    return {
      heading__title: "ZigZag - forex and crypto solutions for brokerage",
      items_block: [
        {
          url: "#",
          block__img: "src/assets/trading.svg",
          block__title: "ZigZag Web Terminal",
          block__text:
            "Trading terminal for metatrader 4 server based on manager api",
        },
        {
          url: "social_trading.html",
          block__img: "src/assets/meeting.svg",
          block__title: "ZigZag Social Trader",
          block__text:
            "Social Tradeing solution for brokers, monay anagers and traders. Can work with any mt4 brokers and accounts",
        },
        {
          url: "#",
          block__img: "src/assets/crm.svg",
          block__title: "ZigZag CRM",
          block__text:
            "Sales CRM and Backoffice solution for MT4 and ther Forex Brokers",
        },
        {
          url: "#",
          block__img: "src/assets/database.svg",
          block__title: "ZigZag Trader",
          block__text:
            "Sales CRM and Backoffice solution for MT4 and other Forex Brokers",
        },
      ],
      items_description: [
        {
          description__title: "MT4& FIX Protocol Based solutions",
          description__text: [
            "MT4 – FIX Bridges",
            "MT4 Order Copier",
            "MT4 Custom Plugins",
          ],
          description__image: "src/assets/mt4.svg",
        },
        {
          description__title: "Custom Development",
          description__text: [
            "ZigZag is team of proffesionals specializing in development for investment banking, crypto and forex",
            "We can help find solution best suites for you from technology perspective as well as service provides and building full brokerage topology.",
          ],
          description__image: "src/assets/computer.svg",
        },
      ],
    };
  },
  components: {
    appblock: Blocks,
    appdesc: Description,
  },
};
</script>
