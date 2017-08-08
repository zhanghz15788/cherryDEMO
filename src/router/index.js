import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import OrderList from '@/components/pages/OrderList'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '业务员',
      menuShow: true,
      iconCls: 'iconfont icon-users',
      children: [
        {path: '/book/1', component: Dashboard, name: '征信请求', menuShow: true},
        {path: '/book/2', component: OrderList, name: '我的客户', menuShow: true},
        {path: '/book/3', component: Dashboard, name: '打款申请', menuShow: true},
        {path: '/book/4', component: Dashboard, name: '统计报表', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '业务经理',
      menuShow: true,
      iconCls: 'iconfont icon-user',
      children: [
        {path: '/book/1', component: Dashboard, name: '待审批项', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '我的客户', menuShow: true},
        {path: '/book/4', component: Dashboard, name: '统计报表', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '审核员',
      menuShow: true,
      iconCls: 'iconfont icon-users',
      children: [
        {path: '/book/1', component: Dashboard, name: '客户查询', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '贷款审核', menuShow: true},
        {path: '/book/3', component: Dashboard, name: '修改审核', menuShow: true},
        {path: '/book/4', component: Dashboard, name: '通融过件审核', menuShow: true},
        {path: '/book/list', component: Dashboard, name: '审核统计', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '审核经理',
      menuShow: true,
      iconCls: 'iconfont icon-user',
      children: [
        {path: '/book/1', component: Dashboard, name: '客户查询', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '贷款审核', menuShow: true},
        {path: '/book/3', component: Dashboard, name: '修改审核', menuShow: true},
        {path: '/book/4', component: Dashboard, name: '通融审核', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '协同发展部',
      menuShow: true,
      iconCls: 'iconfont icon-users',
      children: [
        {path: '/book/1', component: Dashboard, name: '客户查询', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '征信录入', menuShow: true},
        {path: '/book/3', component: Dashboard, name: '我的客户', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '资产保全部',
      menuShow: true,
      iconCls: 'iconfont icon-users',
      children: [
        {path: '/book/1', component: Dashboard, name: '客户查询', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '预期清单', menuShow: true},
        {path: '/book/3', component: Dashboard, name: 'GPS确认', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '财务部',
      menuShow: true,
      iconCls: 'iconfont icon-users',
      children: [
        {path: '/book/1', component: Dashboard, name: '客户查询', menuShow: true},
        {path: '/book/2', component: Dashboard, name: '财务结算', menuShow: true},
        {path: '/book/3', component: Dashboard, name: '打款通知', menuShow: true},
        {path: '/book/4', component: Dashboard, name: '报表统计', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '客户详情',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-user', // 图标样式class
      children: [
        {path: '/user/check', component: Dashboard, name: '客户详情', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '系统管理',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {path: '/sys/menu', component: Dashboard, name: '公司管理', menuShow: true},
        {path: '/sys/dep', component: Dashboard, name: '部门管理', menuShow: true},
        {path: '/sys/user', component: Dashboard, name: '角色管理', menuShow: true},
        {path: '/sys/func', component: Dashboard, name: '功能管理', menuShow: true},
        {path: '/sys/access', component: Dashboard, name: '用户/员工管理', menuShow: true}
      ]
    }
  ]
})
