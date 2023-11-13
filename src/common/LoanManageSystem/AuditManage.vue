<template>
    <div class="audit-manage">
        <div class="form-page" v-if="!showStepPage">
            <div class="form-content">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="index" label="序号" width="150" />
                    <el-table-column prop="limit" label="申请额度" width="150" />
                    <el-table-column prop="custom" label="客户名称" width="160" />
                    <el-table-column prop="state" label="审核状态" width="120" />
                    <el-table-column prop="agent" label="经办人" width="160" />
                    <el-table-column prop="time" label="申请时间" width="240" />
                    <el-table-column fixed="right" label="操作" width="120">
                        <template #default>
                            <el-button link type="primary" size="small">查看</el-button>
                            <el-button link type="primary" size="small" @click="handleClick">审批</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="example-pagination-block">
                <el-pagination layout="prev, pager, next" :total="37" />
            </div>
        </div>
        <div class="step-page" v-if="showStepPage">
            <audit-manage-step-page />
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElPagination } from 'element-plus'
import AuditManageStepPage from './AuditManageComponent/AuditManageStepPage.vue'
const showStepPage = ref(false)
const handleClick = () => {
    showStepPage.value = true
}

const tableData = [
    {
        index: '1',
        limit: '20.4w',
        custom: '熊芳',
        state: '不通过',
        agent: '',
        time: '2023-7-14 11:21:23',
    },
    {
        index: 2,
        limit: "45.6w",
        custom: "李丽",
        state: "不通过",
        agent: "",
        time: "2023-6-22 14:45:09"
    },
    {
        index: 3,
        limit: "63.2w",
        custom: "张勇",
        state: "通过",
        agent: "王刚",
        time: "2023-8-11 09:33:55"
    },
    {
        index: 4,
        limit: "38.1w",
        custom: "刘艳",
        state: "不通过",
        agent: "",
        time: "2023-5-19 17:12:37"
    },
    {
        index: 5,
        limit: "74.8w",
        custom: "刘晓龙",
        state: "通过",
        agent: "赵红",
        time: "2023-9-5 08:04:12"
    },
    {
        index: 6,
        limit: "29.5w",
        custom: "宋萍",
        state: "通过",
        agent: "刘伟",
        time: "2023-7-30 20:56:44"
    },
    {
        index: 7,
        limit: "55.4w",
        custom: "黄勇",
        state: "不通过",
        agent: "",
        time: "2023-10-14 15:28:18"
    },
    {
        index: 8,
        limit: "42.7w",
        custom: "徐秀",
        state: "通过",
        agent: "杨伟",
        time: "2023-11-2 10:09:37"
    },
    {
        index: 9,
        limit: "68.9w",
        custom: "赵娜",
        state: "通过",
        agent: "张敏",
        time: "2023-8-28 13:47:01"
    },
    {
        index: 10,
        limit: "21.3w",
        custom: "杨明",
        state: "不通过",
        agent: "",
        time: "2023-6-7 18:36:25"
    },

    {
        index: 11,
        limit: "32.6w",
        custom: "许婷",
        state: "不通过",
        agent: "",
        time: "2023-9-18 09:15:42"
    },
    {
        index: 12,
        limit: "59.2w",
        custom: "刘强",
        state: "通过",
        agent: "陈丽",
        time: "2023-7-1 14:37:56"
    },
    {
        index: 13,
        limit: "49.8w",
        custom: "陈明",
        state: "通过",
        agent: "李伟",
        time: "2023-10-9 08:53:23"
    },
    {
        index: 14,
        limit: "36.7w",
        custom: "王霞",
        state: "不通过",
        agent: "",
        time: "2023-8-5 17:24:07"
    },



]

</script>
<style scoped lang="scss">
.example-pagination-block+.example-pagination-block {
    margin-top: 10px;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}

.el-pagination {
    float: right;
    margin-right: 2rem;
}
</style>
