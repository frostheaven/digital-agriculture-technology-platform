<template>
    <div class="loan-create">
        <el-steps :active="active" finish-status="success">
            <el-step title="填写资料" />
            <el-step title="授权" />
            <el-step title="审核状态" />
        </el-steps>
        <div class="form-content">
            <div class="info-form" v-if="active == 0">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm"
                    :size="formSize" status-icon>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="身份证号" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="手机号" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="最高学历" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="家庭住址" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="资产情况" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="负债情况" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="收款账户" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="身份验证" prop="name">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            multiple
                        >
                        <el-icon size="50"><CameraFilled /></el-icon>
                        <div class="el-upload__text">
                            <em>人脸识别</em>
                            </div>
                            <template #tip>
                            </template>
                        </el-upload>
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            multiple
                        >
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                            请上传身份证<em>人像</em>面
                            </div>
                            <template #tip>
                            </template>
                        </el-upload>
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            multiple
                        >
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                            请上传身份证<em>国徽</em>面
                            </div>
                            <template #tip>
                            </template>
                        </el-upload>
                       
                    </el-form-item>
                    <!-- <el-form-item label="Activity zone" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="Activity zone">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Activity count" prop="count">
                        <el-select-v2 v-model="ruleForm.count" placeholder="Activity count" :options="options" />
                    </el-form-item>
                    <el-form-item label="Activity time" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date"
                                    placeholder="Pick a date" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                        <el-col class="text-center" :span="2">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time"
                                    style="width: 100%" />
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Instant delivery" prop="delivery">
                        <el-switch v-model="ruleForm.delivery" />
                    </el-form-item>
                    <el-form-item label="Activity type" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="Online activities" name="type" />
                            <el-checkbox label="Promotion activities" name="type" />
                            <el-checkbox label="Offline activities" name="type" />
                            <el-checkbox label="Simple brand exposure" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Resources" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="Sponsorship" />
                            <el-radio label="Venue" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Activity form" prop="desc">
                        <el-input v-model="ruleForm.desc" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">
                            Create
                        </el-button>
                        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                    </el-form-item> -->
                </el-form>
            </div>
            <el-button style="margin-top: 12px" @click="next">下一步</el-button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { ElSteps, ElStep, ElButton, ElForm, ElFormItem, ElSelect, ElOption, ElSelectV2, ElCol, ElInput, ElTimePicker, ElSwitch, ElCheckboxGroup, ElCheckbox, ElRadioGroup, ElRadio } from 'element-plus'
import { ElUpload, ElIcon } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled, CameraFilled } from '@element-plus/icons-vue'

const active = ref(0)
const { proxy }: any = getCurrentInstance()
const href = proxy.$router.resolve({ //使用resolve
    name:'audit-manage',    //这里是跳转页面的name
    path: '/loan-manage-system/audit-manage',
})

const next = () => {
    if (active.value++ > 2) active.value = 0
    window.open(href.href, '_blank')
}

interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    type: string[]
    resource: string
    desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: '请提供您的信息', trigger: 'blur' },
        { min: 2, max: 5, message: '长度应为2~5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>

<style lang="scss" scoped>
.loan-create {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    .form-content {
        .info-form {
            width: 100%;
            margin-top: 2rem;
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
        }
    }
    
}
</style>