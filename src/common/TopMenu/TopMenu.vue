<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0">
            <div style="margin-right: 10px;">
                <el-avatar
                    :src=logo
                    large
                />
            </div>
            农证贷云平台
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="4" style="vertical-align: center;">
            <div class="user-avatar">
                <div>
                    <el-avatar :icon="UserFilled" size="default" 
                    :src="userAvatar"
                    />
                </div>
            </div>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import { UserFilled } from '@element-plus/icons-vue'
    import { ElMenu, ElMenuItem, ElSubMenu, ElAvatar } from 'element-plus'
    import logo from '@assets/logo.png'
    import userAvatar from '@assets/user.jpg'
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style scoped lang="scss">
.el-menu {
    background-color: $common-bgc-primary;
    color: $font-color-light;
    :deep(.is-active) {
        color: $font-color-light!important;
        background-color: lighten($common-bgc-primary, 5);
        &:hover {
            color: $font-hover-color !important;
        }
        &:focus {
            color: $font-hover-color !important;
            background-color: lighten($common-bgc-primary, 10);
        }
    }
    .el-menu-item{
        font-size: 0.85rem;
        height: $top-menu-height;
        display: flex;
        align-items: center;
        & div {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    .el-menu-item, .el-sub-menu {
        width: 12%;
        color: $font-color-light;
        &:hover {
            color:$font-hover-color;
            background-color: lighten($common-bgc-primary, 5);
        }
    }
}

.flex-grow {
    flex-grow: 1;
}

.user-avatar {
  display: flex;
  text-align: center;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
    justify-content: center;
    &:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
  }
}
</style>
