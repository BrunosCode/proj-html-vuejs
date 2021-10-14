<template>
  <header class="c-header h-p--2">
    <div class="c-header__bg"></div>
    <div class="l-container l-row l-spaceBetween l-alignCenter c-header__content">
      <Logo/>
      <nav class="c-header__nav">
        <!-- Print data from the prop json file -->
        <ul class="l-row l-alignCenter h-listReset">
          <li v-for="(link, i) in headerNav.links" :key="i">
            <a :class="{'h-active': link.text === 'home'}" 
            :href="link.link" class="c-link c-header__link h-ml--2">{{link.text}}</a>
          </li>
          <li v-for="(btn, i) in headerNav.buttons" :key="`${i} + 6`">
            <a :class="`c-btn--${btn.type}`" :href="btn.link" 
            class="c-btn c-header__btn h-ml--2">{{btn.text}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./elements/Logo.vue"

export default {
  name: 'Header',
  components: {
    Logo
  },
  props: {
    headerNav: Object,
    bgColor: String
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/mixins.scss";

.c-header {
  width: 100%;
  &__bg {
    position: fixed;
    height: 5rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: $blue;
  }

  &__content {
    position: fixed;
    height: 5rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  &__link {
    text-transform: capitalize;
    color: $white;

    &.h-active {
      font-size: 700;
      color: $magenta;
    }
  }
  &__btn {
    padding: .5rem 1rem;
  }
  
  @media screen and (max-width: 600px) {
    &__content {
      justify-content: center;
    }
    &__btn,
    &__link {
      display: none;
    }
  }
}
</style>
