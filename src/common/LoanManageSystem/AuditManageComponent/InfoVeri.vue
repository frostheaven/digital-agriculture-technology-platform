<template>
    <div class="info-veri">
        <div class="info-wrapper">
            <div class="info-title">
                基本信息
            </div>
            <div class="info-content">
                <div class="info-line">
                    <div class="single-info">
                        姓名：刘晓龙
                    </div>
                    <div class="single-info">
                        年龄：35岁
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        身份证号：330185197409070025
                    </div>
                    <div class="single-info">
                        婚姻状况：已婚
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        电话号码：19816131090
                    </div>
                    <div class="single-info">
                        家庭住址：临安区锦北道218号
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        银行卡号：6228480128755787058
                    </div>
                    <div class="single-info">
                        开户网点：农行杭州竞舟支行
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
                        固定资产：商品房100m<sup>2</sup>
                    </div>
                    <div class="single-info">
                        商品铺面80m<sup>2</sup>
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        金融类资产：山核桃种植保险
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        权利类资产：二十年土地承包经营权
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        活体资产：20亩山核桃种植业
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
                        我行借款金额：无
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        他行借款金额：无
                    </div>
                </div>
                <div class="info-line">
                    <div class="single-info">
                        其他负债：铺面按揭贷款10w
                    </div>
                </div>
            </div>
        </div>
        <div class="avatar-wrapper" style="display: flex;">
            <el-avatar shape="square" :size="200" :src="userAvatar" style="margin-right: 5rem;" />
            <el-avatar shape="square" :size="200" :src="IdentityCard" fit="fill" style="width: 20rem;" />
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ElAvatar } from 'element-plus'
import userAvatar from '@assets/user.jpg'
import IdentityCard from '@assets/identity.jpg'

</script>
<style scoped lang="scss">
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
</style>