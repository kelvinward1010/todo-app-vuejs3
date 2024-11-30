<script setup lang="ts">
  import {Work}  from "../../../types/index.ts";

  const props = defineProps<{ 
    work: Work;
    editItem: (work: Work) => void;
    deleteItem: (id: number) => void; 
  }>();
  const work = props?.work;

  const emitEditItem = () => { 
    props.editItem(work); 
  };

  const emitDeleteItem = () => { 
    props.deleteItem(work.id); 
  };

</script>

<template>
  <div class="container-work-in-list">
    <div class="scrollbar-demo-item">
      <p>Title: {{ work.title }}</p>
      <div class="actions">
        <el-button type="primary" @click="emitEditItem">Edit</el-button>
        <el-button type="danger" @click="emitDeleteItem">Delete</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-work-in-list {
  height: fit-content;
  margin: 10px 0;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 10px 20px;
}

.scrollbar-demo-item .actions{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
}

</style>
