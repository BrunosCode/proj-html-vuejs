import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar, faArrowRight, faArrowLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fasFaStar, farFaStar, faFacebookF, faInstagram, faLinkedinIn, faTwitter, faArrowRight, faArrowLeft, faLongArrowAltRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import "typeface-roboto";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
