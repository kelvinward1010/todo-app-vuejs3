<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="center">
      <h3 class="title-app">Todo App</h3>
      <div class="deep-tech">
        <h5>Technologies used</h5>
        <p>VueJS3</p>
        <p>Element Plus</p>
      </div>
      <router-link to="/todo">
        <button>Explore</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: teal;
  color: white;
}
.center{
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px 30px;
}
.title-app{
  font-size: 40px;
  margin-bottom: 15px;
  border-bottom: 1px solid white;
}
.deep-tech > h5{
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}
.deep-tech > p {
  font-size: 15px;
  text-align: center;
}

button{
  margin: 20px auto 0;
  display: grid;
  border: none;
  padding: 5px 10px;
  background: white;
  color: teal;
  border-radius: 3px;
  cursor: pointer;
}
</style>
