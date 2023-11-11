<template>
    <div class="loan-approval">
        <div class="process-content">
            <div class="single-process wow animate__fadeIn animate__delay-2s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">数字证书评级：3级</div>
            </div>
            <div class="single-process wow animate__fadeIn animate__delay-1s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">轻资产</div>
            </div>
            <div class="single-process wow animate__fadeIn animate__delay-4s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">硬资产</div>
            </div>
            <div class="single-process wow animate__fadeIn animate__delay-3s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">负债数据</div>
            </div>
            <div class="single-process wow animate__fadeIn animate__delay-5s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">司法数据</div>
            </div>
            <div class="single-process wow animate__fadeIn animate__delay-2s">
                <div class="process-tag">
                    <el-icon><CircleCheck /></el-icon>
                </div>
                <div class="process-info">违约记录</div>
            </div>
            
        </div>
        <div class="finish-content" >
            <div class="wow animate__slideInDown" v-if="showResult">
                <el-result
                    icon="success"
                    title="风险等级"
                    sub-title="低风险"
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
    }, 6000)
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