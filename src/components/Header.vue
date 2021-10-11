<template>
  <header :class="`h-bg--${bgColor}`" class="c-header">
    <div class="l-container l-row l-spaceBetween l-alignCenter">
      <img :src="require(`../assets/images/${logoImg}`)" alt="#" class="c-logo c-header__logo">

      <nav class="c-header__nav">
        <!-- Print data from the prop json file -->
        <ul class="l-row l-alignCenter h-listReset">
          <li v-for="(link, i) in headerNav.links" :key="i">
            <a :class="{'h-active': link.text === 'home'}" 
            :href="link.link" class="c-link c-header__link">{{link.text}}</a>
          </li>
          <li v-for="(btn, i) in headerNav.buttons" :key="i">
            <a :class="`c-btn--${btn.type}`" :href="btn.link" 
            class="c-btn c-header__link">{{btn.text}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logoImg: String,
    headerNav: Object,
    bgColor: String
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";

.c-header {
  padding: 1rem;
  color: $white;

  &__logo {
    height: 3rem;
  }

  &__link {
    margin-left: 1rem;
    text-transform: capitalize;

    &.h-active {
      color: $magenta;
    }
  }
}
</style>
