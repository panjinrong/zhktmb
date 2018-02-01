import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 智慧课堂—— 教师端
import wpjl from '@/components/skxx/wpjl'
import skxxlb from '@/components/skxx/skxx_lb'
import skxxpf from '@/components/skxx/skxx_pf'
import ktxq from '@/components/skxx/skxx_lb_ktxq'
import kjzl from '@/components/skxx/skxx_lb_ktxq_kjzl'
import dmjl from '@/components/skxx/skxx_lb_ktxq_dmjl'
import dmjlt from '@/components/dmjl/dmjl_teacher'
import ktpx from '@/components/skxx/skxx_lb_ktxq_ktpx'
import dmxq from '@/components/skxx/dmjl_dmxq'
// import bjcy from './bjcy/bjcy'
// 智慧课堂—— 学生端
import wpjlstu from '@/components/skxxstu/wpjl'
import skxxlbstu from '@/components/skxxstu/skxxstu_lb'
import skxxpfstu from '@/components/skxxstu/skxxstu_pf'
import ktxqstu from '@/components/skxxstu/skxxstu_lb_ktxq'
import dmjls from '@/components/dmjl/dmjl_stu'
import kjzlstu from '@/components/skxxstu/skxxstu_lb_ktxq_kjzl'
import dmjlstu from '@/components/skxxstu/skxxstu_lb_ktxq_dmjl'
import ktpxstu from '@/components/skxxstu/skxxstu_lb_ktxq_ktpx'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    
    // 教师端
    {
      path: '/wpjl', name: 'wpjl', component: wpjl, meta:{title:"未评记录"}
    }, {
      path: '/skxxlb', name: 'skxxlb', component: skxxlb, meta:{title:"授课详情列表"}
    }, {
      path: '/skxxpf', name: 'skxxpf',component: skxxpf, meta:{title:"评分"}
    },{
      path: '/ktxq', name: 'ktxq',component: ktxq, meta:{title:"课堂详情"},redirect:'/ktxq/kjzl',
        children:[
          {path:'/ktxq/kjzl',component:kjzl,meta:{title:"课件资料"}},
          {path:'/ktxq/dmjl',component:dmjl,meta:{title:"点名记录"}},
          {path:'/ktxq/ktpx',component:ktpx,meta:{title:"课堂评分"}}
        ]
    },{
      path:'/dmxq',name:'/dmxq',component:dmxq,meta:{title:"点名详情列表"}
    },{
      path:'/dmjlt',name:'/dmjlt',component:dmjlt,meta:{title:"点名记录"}
    },
    // 学生端
    {
      path: '/wpjlstu', name: 'wpjlstu', component: wpjlstu, meta:{title:"未评记录"}
    }, {
      path: '/skxxlbstu', name: 'skxxlbstu', component: skxxlbstu, meta:{title:"授课详情列表"}
    }, {
      path: '/skxxpfstu', name: 'skxxpfstu',component: skxxpfstu, meta:{title:"评教"}
    },{
      path: '/ktxqstu', name: 'ktxqstu',component: ktxqstu, meta:{title:"课堂详情"},redirect:'/ktxqstu/kjzlstu',
        children:[
          {path:'/ktxqstu/kjzlstu',component:kjzlstu,meta:{title:"课件资料"}},
          {path:'/ktxqstu/dmjlstu',component:dmjlstu,meta:{title:"点名记录"}},
          {path:'/ktxqstu/ktpxstu',component:ktpxstu,meta:{title:"点名记录"}}
        ]
    },{
      path:'/dmjls',name:'/dmjls',component:dmjls,meta:{title:"点名记录"}
    }
  ]
})
const router = new Router();
// router.push('/skxxlb');
