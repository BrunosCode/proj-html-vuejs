<template>
  <header :class="`h-bg--${bgColor}`" class="c-header h-p--2">
    <div class="l-container l-row l-spaceBetween l-alignCenter">
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
            class="c-btn h-ml--2">{{btn.text}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue"

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

.c-header {
  color: $white;

  &__link {
    text-transform: capitalize;

    &.h-active {
      font-size: 700;
      color: $magenta;
    }
  }
}
</style>
