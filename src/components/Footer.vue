<template>
  <footer :class="`h-bg--${bgColor}`" class="c-footer">
    <CtaBanner :content="cta" class="c-footer__banner h-py--4" />

    <!-- Upper footer -->
    <div class="l-container l-row h-pb--4">
      <div class="l-col--1fourth">
        <Logo class="h-mb--1"/>
        <p class="c-footer__text">{{companyInfo.slogan}}</p>
      </div>

      <nav v-for="(nav, i) in footerNav" :key="i"
      class="c-footer__nav l-col--1fourth h-px--3">
        <h3 class="c-footer__title h-mb--1">{{nav.title}}</h3>
        <!-- Print data from the prop json file -->
        <ul class="h-listReset">
          <li v-for="(link, i) in nav.links" :key="i" class="h-mb--1">
            <a :class="{'h-active': link.text === 'home'}" 
            :href="link.link" class="c-link c-footer__link">{{link.text}}</a>
          </li>
        </ul>
      </nav>

      <div class="l-col--1fourth">
        <h3 class="c-footer__title h-mb--1">Contact Us</h3>
        <p class="c-footer__text h-mb--1"><strong>Address:</strong> {{companyInfo.address}}</p>
        <p class="c-footer__text"><strong>Phone:</strong> {{companyInfo.phone}}</p>
        <p class="c-footer__text"><strong>Email:</strong> {{companyInfo.email}}</p>
      </div>
    </div>

    <!-- Bottom footer -->
    <div class="c-footer__bottom">
      <div class="l-container l-row l-spaceBetween ">
        <p class="c-footer__text">{{companyInfo.copyright}}</p>
        <div class="c-footer__icons">
          <a v-for="(icon, i) in companyInfo.socialLinks" :key="i" :href="icon.link" :alt="icon.social"
          class="c-link h-ml--2"><font-awesome-icon :icon="[ 'fab', icon.icon ]" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./elements/Logo.vue";
import CtaBanner from "./elements/CtaBanner.vue";

export default {
  name: 'Footer',
  components: {
    Logo,
    CtaBanner
  },
  props: {
    footerNav: Array,
    companyInfo: Object,
    bgColor: String
  },
  data() {
    return {
      cta: {
        "title": "We offer awesome services",
        "text": "When, while lovely valley teems with vapour around meand meridian sun strikes the upper surface."
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/mixins.scss";

.c-footer {
  color: $white;
  @include bgGradient(180deg, $blue, $darkBlue);

  &__banner {
    position: relative;
    top: -5rem;
  }

  &__title,
  &__link {
    text-transform: capitalize;
  }

  &__bottom {
    border-top: 1px solid $opacity-white-400;
    padding: 1rem;
  }
}

</style>
