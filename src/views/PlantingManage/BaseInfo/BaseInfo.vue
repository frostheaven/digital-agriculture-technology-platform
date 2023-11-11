
<template>
    <div class="apt-detail-form">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0" title="team-overview">个人基础信息</el-menu-item>
            <el-menu-item index="1" title="team-description">核桃园基础信息</el-menu-item>
        </el-menu>
        <div class="detail-container">
            <div class="detail-content team-overview" v-if="activeIndex == '0'">
                <!-- <div class="overview-columns">
                    <div class="info-content">
                        <div class="single-column">
                            姓名
                            <div class="detail">黄军</div>
                        </div>
                        <div class="single-column">
                            身份证号
                            <div class="detail">150000201304024428</div>
                        </div>
                        <div class="single-column">
                            联系电话
                            <div class="detail">13383748069</div>
                        </div>
                        <div class="single-column">
                            房屋
                            <div class="detail">117平方</div>
                        </div>
                        <div class="single-column">
                            茶园
                            <div class="detail">5.2亩</div>
                        </div>
                        <div class="single-column">
                            房贷
                            <div class="detail">无</div>
                        </div>
                        <div class="single-column">
                            车贷
                            <div class="detail">无</div>
                        </div>
                    </div>
                    <div class="img-content">
                        <el-avatar shape="square" :size="200" :src="userPath" />
                    </div>

                </div> -->
                <identity-info />
            </div>
            <div class="detail-content team-description" v-if="activeIndex == '1'">
                <tea-garden-info />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { ElIcon, ElDivider, ElMenu, ElMenuItem, ElAvatar } from 'element-plus'
import userAvatar from '@assets/user.jpg'
import identityInfo from './IdentityInfo.vue'
import TeaGardenInfo from './TeaGardenInfo.vue'
const userPath = ref(userAvatar)
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
    activeIndex.value = key
    // console.log('activeIndex', activeIndex)
}

</script>

<style scoped lang="scss">
.apt-detail-form {
    width: 100%;
    box-sizing: border-box;

    .el-menu {
        background-color: transparent;
        color: $font-color-light;

        :deep(.is-active) {
            color: $font-color-light !important;
            background-color: transparent !important;

            &:hover {
                color: $font-hover-color !important;
            }

            &:focus {
                color: $font-hover-color !important;
                background-color: transparent;
            }
        }

        .el-menu-item {
            font-size: 1rem;
        }

        .el-menu-item,
        .el-sub-menu {
            width: 12%;
            color: $font-color-light;

            &:hover {
                color: $font-hover-color;
                background-color: transparent;
            }
        }
    }

    .detail-container {
        font-size: 0.9rem;
        padding: 2rem;
        color: darken($font-color-light, 10);

        .detail-content {
            width: 100%;
        }
    }
}
</style>
