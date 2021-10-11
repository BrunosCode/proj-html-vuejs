<template>
  <header :class="`h-bg--${bgColor}`" class="l-row l-spaceBetween l-alignCenter c-header">
    <img :src="require(`../assets/images/${logoImg}`)" alt="#" class="c-logo c-header__logo">
    <nav class="c-header__nav">
      <ul class="l-row l-alignCenter h-listReset">
        <li v-for="(link, i) in headerNav.links" :key="i">
          <a :class="{'h-active': link.text === 'home'}" 
          :href="link.link" class="c-link c-header__link">{{link.text}}</a>
        </li>
        <li v-for="(btn, i) in headerNav.buttons" :key="i">
          <a :class="`c-btn--${btn.type}`" :href="btn.link" 
          class="c-btn c-header__btn">{{btn.text}}</a>
        </li>
      </ul>
    </nav>
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

  &__link {
    margin-left: 1rem;
    text-transform: capitalize;

    &.h-active {
      color: $magenta;
    }
  }
}
</style>
