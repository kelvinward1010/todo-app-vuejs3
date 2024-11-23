<script setup lang="ts">
  const props = defineProps({
    work: Object
  });
  const work = props?.work;
</script>

<template>
  <div class="container-work-in-list">
    <p class="scrollbar-demo-item">
      {{ work.lable }}
    </p>
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
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
