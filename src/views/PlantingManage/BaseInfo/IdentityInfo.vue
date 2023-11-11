<template>
    <div class="info-veri">
        <div class="info-wrapper">
            <div class="info-title">
                基本信息
            </div>
            <div class="info-content">
                <div class="info-line">
                    <div class="single-info">
                        姓名：郑勇
                    </div>
                    <div class="single-info">
                        年龄：42岁
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        居住地址：临安区龙潭路12号
                    </div>
                    <div class="single-info">
                        婚姻状况：已婚
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        身份证号：330185198109071371
                    </div>
                    <div class="single-info">
                        劳动人口：3
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        电话号码：18803796820
                    </div>
                    <div class="single-info">
                        最高学历：初中
                    </div>
                </div>
            </div>
        </div>
        <div class="info-wrapper">
            <div class="info-title">
                资产情况
            </div>
            <div class="info-content">
                <div class="info-line">
                    <div class="single-info">
                        固定资产：商品房122m<sup>2</sup>
                    </div>
                    <div class="single-info">
                        君威一辆市价约16w<sup>2</sup>
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        权利类资产：10年土地承包经营权
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        金融类资产：山核桃种植保险
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        活体资产：13.5亩的山核桃种植业
                    </div>
                </div>
            </div>
        </div>
        <div class="info-wrapper">
            <div class="info-title">
                负债情况
            </div>
            <div class="info-content">
                <div class="info-line">
                    <div class="single-info">
                        我行借款金额：5w
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        他行借款金额：无
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        民间借款：无
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        其他负债：无
                    </div>
                </div>
            </div>
        </div>
        <div class="avatar-wrapper" style="display: flex;">
            <el-avatar shape="square" :size="200" :src="userAvatar" style="height: 15rem;" />
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ElAvatar } from 'element-plus'
import userAvatar from '@assets/user.jpg'
import IdentityCard from '@assets/identity.jpg'

</script>
<style scoped lang="scss">
.info-veri {
    position: relative;
}
.info-wrapper {
    margin-bottom: 1.5rem;
    .info-title {
        font-weight: bold;
        font-size: 1.15rem;
        margin-bottom: 0.5rem;
    }

    .info-content {
        display: flex;
        flex-direction: column;

        .info-line {
            display: flex;
            margin: 0.85rem 0;

            .single-info {
                margin-right: 4rem;
            }

        }
    }
}
.avatar-wrapper {
    position: absolute;
    top: 10%;
    right: 20%;
}
</style>