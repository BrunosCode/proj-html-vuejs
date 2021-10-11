<template>
  <div id="app">
    <Header :logo-img="'white-logo-2.png'" :header-nav="headerNav" :bg-color="'primary'"/>
    <!-- Header with logo and headerNav component-->
    <main class="c-main">
      <!-- Hero -->
      <!-- GridSection -->
      <!-- SplitSection -->
      <!-- CaruselSection -->
      <!-- CardsSection -->
      <!-- PostsSection -->
      <!-- TestimonialsSection -->
      <!-- LogosSection -->
    </main>
    <!-- Footer with: CtaBanner, FooterNavs and SocialNav -->
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import headerNav from "./data/headerNav.json"

export default {
  name: 'App',
  components: {
    Header,

  },
  data() {
    return {
      headerNav,

    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

</style>
