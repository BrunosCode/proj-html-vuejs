<template>
  <div id="app">
    <Header :header-nav="headerNav" :bg-color="'primary'"/>
    <!-- Header with logo and headerNav component-->
    <main class="c-main">
      <!-- Hero py-3 -->
      <!-- GridSection -->
      <!-- HeroReversed py-2 -->
      <!-- CaruselSection -->
      <!-- CardsSection -->
      <!-- PostsSection -->
      <!-- TestimonialsSection -->
      <!-- LogosSection -->
    </main>
    <Footer :footer-nav="footerNav" :company-info="companyInfo" :bg-color="'primary'"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import companyInfo from "./data/companyInfo.json";
import headerNav from "./data/headerNav.json";
import footerNav from "./data/footerNav.json";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      companyInfo,
      headerNav,
      footerNav
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

</style>
