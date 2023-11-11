import PlantingManage from '@router/PlantingManage/index.ts'
import LoanManage from '@router/LoanManage/index.ts'
export const createrouter = [
  {
    path: '/',
    name: 'default',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@common/home/home.vue'),
    name: 'home',
    redirect: '/home/planting-manage',
    meta: {
      title: '首页',
      icon: 'UserFilled',
      hidden: true
    },
    children: [
      {
        path: '/home/planting-manage',
        name: 'planting-manage',
        redirect: '/home/planting-manage/base-info',
        children: [...PlantingManage],
        meta: {
          title: '种植管理'
        }
      },
      {
        path: '/home/logistics-manage',
        name: 'logistics-manage',
        component: () => import('@views/LogisticsManage/LogisticsManage.vue'),
        meta: {
          title: '物流管理',
          hidden: true
        }
      },
      {
        path: '/home/harvest-manage',
        name: 'harvest-manage',
        component: () => import('@views/HarvestManage/HarvestManage.vue'),
        meta: {
          title: '采摘管理',
          hidden: true
        }
      },
      {
        path: '/home/processing-manage',
        name: 'processing-manage',
        component: () => import('@views/ProcessingManage/ProcessingManage.vue'),
        meta: {
          title: '加工管理',
          hidden: true
        }
      },
      {
        path: '/home/trace-query',
        name: 'trace-query',
        component: () => import('@views/TraceQuery/TraceQuery.vue'),
        meta: {
          title: '溯源查询',
          hidden: true
        }
      },
      {
        path: '/home/loan',
        name: 'loan',
        component: () => import('@views/loan/loan.vue'),
        meta: {
          title: '我要贷款',
          hidden: true
        }
      },
      {
        path: '/home/points-mall',
        name: 'points-mall',
        component: () => import('@views/PointsMall/PointsMall.vue'),
        meta: {
          title: '积分商城',
          hidden: true
        }
      },
    ]
  },
  {
    path: '/loan-manage-system',
    component: () => import('@common/LoanManageSystem/LoanManageSystem.vue'),
    name: 'loan-manage-system',
    redirect: '/loan-manage-system/audit-manage',
    meta: {
      title: '银行贷款管理系统',
      hidden: true
    },
    children: [...LoanManage]
  },
]