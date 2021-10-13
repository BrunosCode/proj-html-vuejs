<template>
  <div class="l-container l-row l-alignCenter c-banner">
    <div class="l-col l-col--2third l-justifyCenter">
      <h3 v-if="content.title" class="c-banner__title">{{content.title}}</h3>
      <p v-if="content.text" class="c-banner__text">{{content.text}}</p>
    </div>
    <div class="l-col l-col--1third l-justifyCenter">
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
  color: $white;
  @include bgGradient(90deg, $magenta, $salmon);
  border-radius: 1.5rem;
  padding: 3rem 2rem;

  &__title {
    text-transform: capitalize;
    font-size: 2rem;
  }
  
}
</style>
