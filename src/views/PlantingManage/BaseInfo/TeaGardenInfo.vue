
<template>
    <div class="overview-columns">
        <div class="info-content">
            <div class="single-column">
                种植面积
                <div class="detail">13.6亩</div>
            </div>
            <div class="single-column">
                总产
                <div class="detail">7020斤</div>
            </div>
            <div class="single-column">
                平均树龄
                <div class="detail">7年</div>
            </div>
            <div class="single-column">
                地块位置
                <div class="detail">河桥镇岭脚</div>
            </div>
            <div class="single-column">
                施肥时间
                <div class="detail">9月份后</div>
            </div>
            <div class="single-column">
                施肥用量
                <div class="detail">每亩2~4斤复合肥+硫酸钾4~6斤</div>
            </div>
            <div class="single-column">
                土壤PH
                <div class="detail">6.8左右</div>
            </div>
            <div class="single-column">
                环境指数
                <div class="detail">102.62</div>
            </div>
        </div>
        <!-- <div class="img-content">
                        <el-avatar shape="square" :size="200" :src="userPath" />
                    </div> -->

    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { ElIcon, ElDivider, ElMenu, ElMenuItem } from 'element-plus'
const showAPTDetail = inject('showAPTDetail')
const returnAPTOrg = () => {
    showAPTDetail.value = true
}
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
    activeIndex.value = key
    // console.log('activeIndex', activeIndex)
}

</script>

<style scoped lang="scss">
.overview-columns {
    width: 100%;
    display: flex;
    flex-direction: raw;

    .info-content {
        width: 60%;
        display: flex;
        flex-direction: column;

        .single-column {
            margin: 1rem 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            position: relative;

            .detail {
                position: absolute;
                margin-left: 40%;
                color: $font-color-light;
                font-weight: 600;
                width: calc(45vw);
            }
        }
    }

    .img-content {
        margin-top: 2%;
    }

}
</style>
