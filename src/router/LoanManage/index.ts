import { RouteRecordRaw } from 'vue-router'
import auditManage from '@common/LoanManageSystem/AuditManage.vue'
import postLoanManage from '@common/LoanManageSystem/PostLoanManage.vue'


const route: RouteRecordRaw[] = [
    {
        path: '/loan-manage-system/audit-manage',
        name: 'audit-manage',
        component: auditManage,
        meta: {
            title: '审验管理',
            hidden: true
        }
    },
    {
        path: '/loan-manage-system/post-loan-manage',
        name: 'post-loan-manage',
        component: postLoanManage,
        meta: {
            title: '贷后管理',
            hidden: true
        }
    },
]

export default route