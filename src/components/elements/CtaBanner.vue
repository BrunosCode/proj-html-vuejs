<template>
  <div :class="`h-bg--${content.bg}`" class="l-container l-row l-wrap l-alignCenter c-banner">
    <div class="l-col l-col--2third l-justifyCenter">
      <h3 v-if="content.title" v-html="content.title" class="c-title c-banner__title h-mb--2"></h3>
      <p v-if="content.text" v-html="content.text" class="c-text"></p>
    </div>
    <div class="l-col l-col--1third l-justifyCenter c-banner__input">
      <EmailSubscription />
    </div>
  </div>
</template>

<script>
import EmailSubscription from "./EmailSubscription.vue";

export default {
  name: 'CtaBanner',
  components: {
    EmailSubscription
  },
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";

.c-banner {
  @include bgGradient(90deg, $magenta, $salmon);
  border-radius: 1.5rem;
  padding: 2rem 2rem;
  &__title {
    font-size: 2rem;
  }
}
@media screen and (max-width: 700px) {
  .c-banner {
    text-align: center;
    padding: 2rem 4rem;

    &__input {
      margin-top: 2rem;
    }
  }
  .l-col--2third,
  .l-col--1third {
    width: 100%;
  }
}
</style>
