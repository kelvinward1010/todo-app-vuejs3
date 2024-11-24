<script setup lang="ts">
import { ref } from "vue";
import type { ButtonInstance } from "element-plus";
import FormWorkInList from "./components/FormWorkInList.vue";

const workList = [
    { id: 0, lable: "Work 1" },
    { id: 1, lable: "Work 2" },
    { id: 2, lable: "Work 3" },
];

const centerDialogVisible = ref(false);
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
                    <el-button plain @click="centerDialogVisible = true">
                        Create
                    </el-button>
                    <el-dialog v-model="centerDialogVisible" title="Warning" width="500" align-center>
                        <span>Open the dialog from the center from the screen</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="centerDialogVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                </div>
            </div>
            <el-scrollbar height="400px">
                <FormWorkInList v-for="item in workList" :work="item" :key="item.id" />
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

.actions{
    padding: 20px;
}

.actions .create{
    width: fit-content;
}

.content .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>
