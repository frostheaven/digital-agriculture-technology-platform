<template>
    <div class="top-menu">
        <top-menu />
    </div>
    <div class="central-display">
        <el-container class="layout-container">
            <el-aside width="200px" style="background-color: #fff;">
                <el-scrollbar>
                    <el-menu :default-active="activeIndex"
                        @select="handleSelect">

                        <el-menu-item index="audit-manage">
                            <template #title>
                                <el-icon>
                                    <Promotion />
                                </el-icon>审验管理
                            </template>
                        </el-menu-item>

                        <el-menu-item index="post-loan-manage">
                            <template #title>
                                <el-icon>
                                    <Filter />
                                </el-icon>贷后管理
                            </template>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </el-aside>

            <el-container>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import TopMenu from '@common/SysTopMenu/SysTopMenu.vue'

import { ref, getCurrentInstance } from 'vue'
import { Ticket, Scissor, Filter, PieChart, Wallet, Promotion, Present, Stamp } from '@element-plus/icons-vue'
import { ElContainer, ElAside, ElSubMenu, ElScrollbar, ElMenuItem, ElIcon, ElMenuItemGroup, ElMenu, ElHeader, ElMain, ElTable, ElTableColumn } from 'element-plus'


const { proxy }: any = getCurrentInstance()
const handleSelect = (key: string, keyPath: string[]) => {
    console.log('key:', key, '|| keyPath:', keyPath)
    const router: any = proxy.$router
    router.push({
        name: key
    })
}
const activeIndex: string = proxy.$router.name

</script>

<style scoped lang="scss">
$font-hover-color: #e7a935;
.top-menu {
    height: $top-menu-height;
    width: 100%;
}

.central-display {
    height: calc(100vh - $top-menu-height);
    position: fixed;
    width: 100%;
}

.layout-container {
    height: 100%;

    .el-header {
        position: relative;
        background-color: $common-bgc-dark;
    }

    .el-menu {
        border-right: none;

        .el-menu-item,
        :deep(.el-sub-menu__title) {
            color: $font-color-light;
            height: 2.8rem;
            font-size: 0.85rem;

            &:hover {
                background-color: darken($common-bgc-dark, 10);
                color: lighten($font-color-light, 10);
                transition: 0.3s linear;
            }
        }

        :deep(.is-active) {
            color: $font-hover-color !important;
            ;
        }

        &,
        &>* {
            background: $common-bgc-dark;
        }

    }

    .el-main {
        padding: 0;
        width: 100%;
        padding: 1rem;
        // & > * {
        //     border-radius: 5%;
        // }
    }

    .toolbar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        right: 20px;
        font-size: 1rem;
        color: $font-hover-color;
    }
}
</style>