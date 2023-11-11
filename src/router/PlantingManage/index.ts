import { RouteRecordRaw } from 'vue-router'
import baseInfo from '@views/PlantingManage/BaseInfo/BaseInfo.vue'
import RMPI from '@views/PlantingManage/RMPI/RMPI.vue'
import plantInfo from '@views/PlantingManage/PlantingInfo/PlantingInfo.vue'


const route: RouteRecordRaw[] = [
    {
        path: '/home/planting-manage/base-info',
        name: 'base-info',
        component: baseInfo,
        meta: {
            title: '基础信息',
            hidden: true
        }
    },
    {
        path: '/home/planting-manage/raw-material-purchase-info',
        name: 'raw-material-purchase-info',
        component: RMPI,
        meta: {
            title: '原料购买信息',
            hidden: true
        }
    },
    {
        path: '/home/planting-manage/planting-info',
        name: 'planting-info',
        component: plantInfo,
        meta: {
            title: '种植信息',
            hidden: true
        }
    },
]

export default route