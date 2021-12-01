<template>
<!-- All json data is taken from config files, to simulate an api call -->
  <div id="app">
    <!-- Header with logo and headerNav component-->
    <Header :header-nav="headerNav" :bg-color="'primary'"/>

    <main class="c-main">
      <SplitHero :content="homeHero" class="h-py--4" />

      <ColumnsSection :content="ourServices" class="h-py--4"/>

      <SplitHero :content="startYourProject" class="h-py--3" />

      <CarouselSection :content="latestWork" class="h-py--4" />

      <CardsSection :content="ourPricing" class="h-py--4" />

      <PostsSection :content="latestPosts" class="h-py--4" />

      <TestimonialsSection :content="testimonials" class="h-py--3" />

      <LogosSection :content="partnerLogos" class="h-pb--6" />
    </main>

    <Footer :footer-nav="footerNav" :company-info="companyInfo" :bg-color="'primary'"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// Section Compontents
import SplitHero from "./components/sections/SplitHero.vue";
import ColumnsSection from "./components/sections/ColumnsSection.vue";
import CarouselSection from "./components/sections/CarouselSection.vue";
import CardsSection from "./components/sections/CardsSection.vue";
import PostsSection from "./components/sections/PostsSection.vue";
import TestimonialsSection from "./components/sections/TestimonialsSection.vue";
import LogosSection from "./components/sections/LogosSection.vue";


// Section Data
import companyInfo from "./data/companyInfo.json";
import headerNav from "./data/headerNav.json";
import homeHero from "./data/homeHero.json";
import ourServices from "./data/ourServices.json";
import startYourProject from "./data/startYourProject.json";
import latestWork from "./data/latestWork.json";
import ourPricing from "./data/ourPricing.json";
import latestPosts from "./data/latestPosts.json";
import testimonials from "./data/testimonials.json";
import partnerLogos from "./data/partnerLogos.json";
import footerNav from "./data/footerNav.json";

export default {
  name: 'App',
  components: {
    Header,
    SplitHero,
    ColumnsSection,
    CarouselSection,
    CardsSection,
    PostsSection,
    TestimonialsSection,
    LogosSection,
    Footer
  },
  data() {
    return {
      companyInfo,
      headerNav,
      homeHero,
      ourServices,
      startYourProject,
      latestWork,
      ourPricing,
      latestPosts,
      testimonials,
      partnerLogos,
      footerNav
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

#app {
  font-family: 'Roboto', sans-serif;
}

</style>
