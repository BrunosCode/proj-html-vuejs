<template>
  <div id="app">
    <Header :header-nav="headerNav" :bg-color="'primary'"/>
    <!-- Header with logo and headerNav component-->
    <main class="c-main">
      <SplitHero :content="homeHero" class="h-py--4" />
      <ColumnsSection :content="ourServices" class="h-py--4"/>
      <SplitHero :content="startYourProject" class="h-py--3" />
      <!-- CaruselSection -->
      <CardsSection :content="ourPricing" class="h-py--4" />
      <PostsSection :content="latestPosts" class="h-py--4" />
      <!-- PostsSection -->
      <!-- TestimonialsSection -->
      <!-- LogosSection -->
      <!-- CtaBanner -->
    </main>
    <Footer :footer-nav="footerNav" :company-info="companyInfo" :bg-color="'primary'"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import SplitHero from "./components/sections/SplitHero.vue";
import ColumnsSection from "./components/sections/ColumnsSection.vue";
import CardsSection from "./components/sections/CardsSection.vue";
import PostsSection from "./components/sections/PostsSection.vue";


// Section Data
import companyInfo from "./data/companyInfo.json";
import headerNav from "./data/headerNav.json";
import homeHero from "./data/homeHero.json";
import ourServices from "./data/ourServices.json";
import startYourProject from "./data/startYourProject.json";
import ourPricing from "./data/ourPricing.json";
import latestPosts from "./data/latestPosts.json";
import footerNav from "./data/footerNav.json";

export default {
  name: 'App',
  components: {
    Header,
    SplitHero,
    ColumnsSection,
    CardsSection,
    PostsSection,
    Footer
  },
  data() {
    return {
      companyInfo,
      headerNav,
      homeHero,
      ourServices,
      startYourProject,
      ourPricing,
      latestPosts,
      footerNav
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

</style>
