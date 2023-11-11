<template>
    <div class="loan-display">
        <div class="loan-list" v-if="showLoanCreate">
            <div class="loan-list-card" v-for="number in Array.from({length: 1}, (val, index)=> index)">
                <div class="img-content">
                    <el-avatar shape="square" :size="120" :src="loanPicArr[number]" />
                </div>
                <div class="amount-content inner-content">
                    <div class="inner-title">农政贷</div>
                    <div class="inner-data">10万起</div>
                    <div class="inner-type">金额</div>
                </div>
                <div class="rate-content inner-content">
                    <div class="inner-data">4.20%</div>
                    <div class="inner-type">利率</div>
                </div>
                <div class="time-limit-content inner-content">
                    <div class="inner-data">3年</div>
                    <div class="inner-type">期限</div>
                </div>
                <div class="btn-content inner-content">
                    <el-button @click="applyForLoan">立即申请</el-button>
                </div>

            </div>
        </div>
        <div class="loan-create" v-if="!showLoanCreate">
            <LoanCreate />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import LoanCreate from './loanCreate.vue'
import { ref } from 'vue'
import { ElAvatar, ElButton } from 'element-plus';
import loanPic1 from '@assets/loan1.jpg'
import loanPic2 from '@assets/loan2.jpg'

const active = ref(0)
const showLoanCreate = ref(true)
const loanPicArr = ref([loanPic1, loanPic2])

const applyForLoan = () => {
    showLoanCreate.value = false
}
</script>

<style lang="scss" scoped>
    .loan-display {
        padding: 2rem;
        box-sizing: border-box;
        width: 100%;
        .loan-list {
            width: 100%;
            .loan-list-card {
                width: 100%;
                background-color: $common-bgc-dark;
                border-bottom: solid gray 2px;
                height: calc(22vh);
                border-radius: 0.5rem;
                display: flex;
                justify-content: space-around;
                position: relative;
                .inner-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    padding-bottom: calc(3.5vh);
                    & * {
                        margin: calc(1vh);
                    }
                    .inner-title {
                        font-size: 1.15rem;
                    }
                    .inner-data {
                        font-weight: bolder;
                    }
                    .inner-type {
                        font-size: 0.85rem;
                    }
                }
                .img-content {
                    align-self: center;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
</style>