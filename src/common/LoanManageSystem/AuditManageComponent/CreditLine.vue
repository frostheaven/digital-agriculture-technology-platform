<template>
    <div class="loan-approval">
        <div class="finish-content">
            <div class="wow animate__bounceIn" v-if="showResult">
                <el-result
                    icon="success"
                    title="综合评估结果，放贷金额：25万元"
                >
                </el-result>
            </div>
        </div>

    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { ElResult, ElIcon } from 'element-plus'
import { CircleCheck } from '@element-plus/icons-vue'
const showResult = ref(false)

onMounted(() => {
    const timer = setInterval(() => {
        showResult.value = true
    }, 1000)
    if(showResult.value === true)clearInterval(timer)
})

</script>
<style scoped lang="scss">
.process-content {
    width: 100%;
    box-sizing: border-box;
    .single-process {
        display: flex;
        align-items: center;
        height: 2rem;
        padding: 0.5rem 0;
        .process-tag {
            display: flex;
            font-size: 2rem;
            color: skyblue;
        }
        .process-info {
           font-size: 1.15rem;
           margin-left: 2rem;
           font-weight: bold;
        }
    }
}
.finish-content {
    height: 13rem;
    :deep(.el-result) {
        --el-result-icon-font-size: 5rem;
        .icon-success {
            --el-result-color: rgb(82, 195, 240);
        }
    }
}

</style>