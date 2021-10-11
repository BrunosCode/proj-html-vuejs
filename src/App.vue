<template>
  <div id="app">
    <Header :header-nav="headerNav" :bg-color="'primary'"/>
    <!-- Header with logo and headerNav component-->
    <main class="c-main">
      <SplitHero :content="hero1" :is-reversed="false" class="h-py--4" />
      <!-- GridSection -->
      <SplitHero :content="hero2" :is-reversed="true" class="h-py--3" />
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

import SplitHero from "./components/SplitHero.vue";

import companyInfo from "./data/companyInfo.json";
import headerNav from "./data/headerNav.json";
import footerNav from "./data/footerNav.json";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SplitHero
  },
  data() {
    return {
      companyInfo,
      headerNav,
      footerNav,
      hero1: {
        title: "Business planning digital technology modern solution !",
        text: "When, while the valley teems with vapour around meand the meridian sun strikes the upper surface .",
        buttons: [
          {
            text: "Try it now",
            link: "#",
            type: "red"
          },
          {
            text: "Explore More",
            link: "#",
            type: "blue"
          }
        ],
        img: {
          alt: "Man behind the desk",
          src: "header.png"
        }
      },
      hero2: {
        pretitle: "Start you project",
        title: "Grow your business with our strategy",
        text: "When, while the valley teems with vapour around meand the meridian sun strikes the upper surface of the impenetrable follage of my trees, and but a few stray gleams steal into the inner sanctury.",
        buttons: [
          {
            text: "Try it now",
            link: "#",
            type: "red"
          },
          {
            text: "Explore More",
            link: "#",
            type: "blue"
          }
        ],
        img: {
          alt: "Man over stacks",
          src: "men-data.png"
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

</style>
