import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  template: '<App :page="page" />',
  data() {
    return {
      page: ''
    }
  },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1);
    }
  },
  mounted() {
    this.setPage();
    this.$on('router-go', this.setPage);
    window.addEventListener('popstate', this.setPage);
  },
  router,
  store,
  render: h => h(App)
},
).$mount('#app')
