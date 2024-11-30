<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import type { FormRules, FormInstance } from "element-plus";
import FormWorkInList from "./components/FormWorkInList.vue";
import storage from '../../utils/storage';
import {Work}  from "../../types/index.ts";


const centerDialogVisible = ref(false);
const formRef = ref<FormInstance>();
const items = reactive<Work[]>(storage.getItems());

const formData = reactive({
    id: 0,
    title: '',
    content: '',
})

const loadItems = () => { 
    const data = storage.getItems(); 
    items.splice(0, items.length, ...data);
};

const isEditMode = ref(false);

const rules = reactive<FormRules<typeof formData>>({
    title: [
        { required: true, message: 'title is required' },
        { type: 'string', message: 'title must be a string' },
    ],
    content: [
        { required: true, message: 'content is required' },
        { type: 'string', message: 'content must be a string' },
    ],
})

const openCreateDialog = () => {
    isEditMode.value = false;
    formData.id = 0;
    formData.title = '';
    formData.content = '';
    centerDialogVisible.value = true;
};

const openEditDialog = (work: Work) => {
    isEditMode.value = true;
    formData.id = work.id;
    formData.title = work.title;
    formData.content = work.content;
    centerDialogVisible.value = true;
};


const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            const dataField = { 
                title: formData.title, 
                content: formData.content 
            }
            if (isEditMode.value) {
                const index = items.findIndex(item => item.id === formData.id); 
                if (index !== -1) {
                    items[index] = { ...items[index], id: formData.id, ...dataField }; 
                }
                storage.updateItem(formData.id, dataField);
            } else {
                storage.addItem(dataField);
            }
            centerDialogVisible.value = false;
            formEl.resetFields();
            loadItems();
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const deleteItem = (id: number) => { 
    storage.deleteItem(id); 
    loadItems(); 
};

onMounted(() => { 
    loadItems(); 
});

watch(items, () => { 
}, { deep: true });

</script>

<template>
    <div class="container">
        <div class="header">
            <router-link class="linktoapp" to="/">
                <h2>Todo Application</h2>
            </router-link>
        </div>

        <div class="content">
            <div class="actions">
                <div class="create">
                    <el-button plain @click="openCreateDialog">
                        Create
                    </el-button>
                    <el-dialog v-model="centerDialogVisible" :title="isEditMode ? 'Edit Work' : 'Create a New Work'" width="500" align-center>
                        <el-form ref="formRef" style="max-width: 600px" :model="formData" label-width="auto"
                            class="demo-ruleForm">
                            <el-form-item 
                                label="Title" 
                                prop="title" 
                                :rules="rules.title"
                            >
                                <el-input v-model.trim="formData.title" type="text" autocomplete="off" />
                            </el-form-item>
                            <el-form-item 
                                label="Content" 
                                prop="content" 
                                :rules="rules.content"
                            >
                                <el-input v-model.trim="formData.content" type="text" autocomplete="off" />
                            </el-form-item>
                        </el-form>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                                <el-button @click="resetForm(formRef)">Reset</el-button>
                                <el-button type="primary" @click="submitForm(formRef)">Confirm</el-button>
                            </div>
                        </template>
                    </el-dialog>
                </div>
            </div>
            <el-scrollbar class="scoll-container" height="700px">
                <h2 class="titlemain">My Works</h2>
                <FormWorkInList v-for="item in items" :edit-item="openEditDialog" :delete-item="deleteItem" :work="item" :key="item.id" />
            </el-scrollbar>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.header {
    width: 100vw;
    padding: 10px;
    text-align: center;
    background: teal;
    color: white;
}

.header h2 {
    color: white;
}

.header .linktoapp {
    text-decoration: none;
}

.actions {
    padding: 20px;
}

.actions .create {
    width: fit-content;
}

.content .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.scoll-container{
    width: 90%;
    margin: 0 auto;
    border: 1px solid teal;
    border-radius: 5px;
}

.titlemain{
    background-color: teal;
    color: white;
    text-align: center;
    padding: 5px 0;
}

</style>
