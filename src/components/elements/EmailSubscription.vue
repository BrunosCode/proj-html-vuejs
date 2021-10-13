<template>
  <div class="c-emailSubscription l-row l-alignCenter">
    <input type="text" placeholder="Enter Your Email Address"
    class="c-emailSubscription__input">
    <button class="c-btn c-btn--blue c-emailSubscription__btn">Subscribe</button>
  </div>
</template>

<script>

export default {
  name: 'EmailSubscription',
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";

.c-emailSubscription {
  position: relative;
  &__input {
    border-radius: 2rem;
    padding: 1rem 1rem;
    width: 100%;
    border: none;
  }
  &__btn {
    position: absolute;
    right: .5rem;
    padding: .5rem 1rem;
  }
}
</style>
