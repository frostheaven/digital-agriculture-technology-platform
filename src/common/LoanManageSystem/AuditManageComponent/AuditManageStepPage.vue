<template>
    <div class="loan-create">
        <el-steps :active="active" finish-status="success">
            <el-step title="信息核验" />
            <el-step title="贷款审批" />
            <el-step title="贷款额度" />
        </el-steps>
        <div class="form-content">
            <div class="info-veri" v-if="active == 0">
                <info-veri />
            </div>
            <div class="loan-approval" v-if="active == 1">
                <loan-approval />
            </div>
            <div class="credit-line" v-if="active == 2">
                <credit-line />
            </div>
            <el-button style="margin-top: 12px" @click="next" v-if="active == 0">开启风险分析</el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="active == 1">查看贷款额度</el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="active == 2">确认放贷</el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="active == 2">驳回申请</el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="active > 2">重置</el-button>

        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { ElSteps, ElStep, ElButton, ElForm, ElFormItem, ElSelect, ElOption, ElSelectV2, ElCol, ElInput, ElTimePicker, ElSwitch, ElCheckboxGroup, ElCheckbox, ElRadioGroup, ElRadio } from 'element-plus'
import { ElUpload, ElIcon } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled, CameraFilled } from '@element-plus/icons-vue'
import InfoVeri from './InfoVeri.vue'
import LoanApproval from './LoanApproval.vue'
import CreditLine from './CreditLine.vue'

const active = ref(0)

const next = () => {
    if (active.value++ > 2) active.value = 0
}

</script>

<style lang="scss" scoped>
.loan-create {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    .form-content {
        padding: 2rem;
        .info-form {
            width: 100%;
            .el-input {
                width: calc(30vw);
            }
            &:deep(.el-upload) {
                width: calc(20vw);
                margin-right: 2rem;
            }
        }
        .el-button {
            float: right;
            margin-right: 1rem;
        }
    }
    
}
</style>