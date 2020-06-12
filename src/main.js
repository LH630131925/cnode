import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import { toTop } from "./derectives/index.js"

import { Tabs, Pagination,Table,TabPane,TableColumn,Image} from 'element-ui';

Vue.component(Tabs.name, Tabs);
Vue.component(Pagination.name, Pagination);
Vue.component(Table.name, Table);
Vue.component(TabPane.name, TabPane);
Vue.component(TableColumn.name,TableColumn)
Vue.component(Image.name,Image)

Vue.directive('gotop',toTop)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
