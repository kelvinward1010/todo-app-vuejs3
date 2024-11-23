<script setup lang="ts">
import FormWorkInList from '../components/FormWorkInList.vue';

const workList = [
  { id: 0, lable: 'Work 1' },
  { id: 1, lable: 'Work 2' },
  { id: 2, lable: 'Work 3' }
]

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
            <FormWorkInList 
                v-for="item in workList"         
                :work="item"
                :key="item.id"
            />
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

</style>
