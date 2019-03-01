export default [
  {
    path: '/demos/demo-list',
    name: 'demos.demo-list',
    meta: {
      title: '测试列表'
    },
    component: () =>
      import(/* webpackChunkName: "demo-list" */ './views/DemoList.vue')
  },
  {
    path: '/demos/demo-detail/:id',
    name: 'demos.demo-detail',
    meta: {
      title: '测试详情'
    },
    component: () =>
      import(/* webpackChunkName: "demo-list" */ './views/DemoDetail.vue'),
    children: [
      {
        path: 'pop',
        name: 'demos.demo-detail.pop',
        meta: {
          title: '测试侧滑'
        },
        component: () =>
          import(/* webpackChunkName: "demo-list" */ './views/DemoPop.vue')
      }
    ]
  }
]
