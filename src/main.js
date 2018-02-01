// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from '../vuex/store'
import Vuex from 'vuex'
import { Circle } from 'iview'
import 'iview/dist/styles/iview.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Rate } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import config from './../static/config.js'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('i-circle', Circle)
Vue.use(MintUI);
// Vue.use(ElementUI);
Vue.use(Rate)
global.COURSES = config
Vue.prototype.$axios = axios
Vue.use(require('vue-wechat-title'))
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  console.log(to)
  if(sessionStorage.getItem("userinfo")){
    //返回上一页判断
      // if(to.name == './ktxq' || to.name == 'skxxpf' || to.name == 'ktxq/dmjl' || to.name =='/ktxq/kjzl' || to.name =='/ktxq/ktpx' || to.name == '/jbgl/jbgl_yxmb' || to.name =='/index'){
      //   if(store.getters.getTjstus){
      //      next()
      //       store.dispatch('set_tjstus', false);
      //   }else{
      //       router.push('/skxxlbstu')
      //       store.dispatch('set_tjstus', true);
      //   }
      // }else{
        next()
      // }
  }else{
    if( to.path == '/dmjls'|| to.path == '/dmjlt' || to.path == './wpjlstu' ||to.path == '/skxxlbstu'||to.path == '/dmxq'||to.path == '/bjcy'||to.path == '/skxxpf'||to.path == '/wpjl' || to.path == '/skxxlb' || to.path == '/ktxq/kjzl' || to.path == '/ktxq/dmjl' || to.path == '/ktxq/ktpx'){
      var userinfo = JSON.stringify(to.query); 
      sessionStorage.setItem("userinfo",userinfo)
      next();
    }else{
      alert("您的身份信息过期请重进！！！");
      axios.get('http://www.close.com');
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
