// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(mint);
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

//全局过滤器
// import moment from 'moment'
// Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
// return moment(dataStr).format(pattern)
// })
Vue.filter('dateFormat',(dataStr) => {
  var time = new Date(dataStr);

  function timeAdd0(str) {
    if (str < 10) {
      str = '0' + str;
    }
    return str
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
