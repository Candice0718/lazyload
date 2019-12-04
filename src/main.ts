import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

import {dialog} from '@ocj/ocj-erp-components';
Vue.use(dialog);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  beforeCreate: function() {
    console.debug('Vue对象目前状态：beforeCreate');
  },
  created: function() {
    console.debug('Vue对象目前状态：created');
  },
  beforeMount: function() {
    console.debug('Vue对象目前状态：beforeMount');
  },
  mounted: function() {
    console.debug('Vue对象目前状态：mounted');
  },
  beforeUpdate: function() {
    console.debug('Vue对象目前状态：beforeUpdate');
  },
  updated: function() {
    console.debug('Vue对象目前状态：updated');
  },
  beforeDestroy: function() {
    console.debug('Vue对象目前状态：beforeDestroy');
  },
  destroyed: function() {
    console.debug('Vue对象目前状态：destroyed');
  }
});
