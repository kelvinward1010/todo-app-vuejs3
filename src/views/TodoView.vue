<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="header">
        <router-link class="linktoapp" to="/">
            <h2>Todo Application</h2>
        </router-link>
    </div>

    <div class="content">
        <el-scrollbar height="400px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.header{
    width: 100vw;
    padding: 10px;
    text-align: center;
    background: teal;
    color: white;
}

.header h2{
    color: white;
}

.header .linktoapp{
    text-decoration: none;
}

.content .scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

</style>
