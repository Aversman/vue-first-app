<template>
  <div>
    <h1>404</h1>
    <h4>Page not found</h4>
    <router-link to="/">Main Page</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
div {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 7em;
  margin: 0;
  padding: 0
}

a {
  padding: 4px 0;
  border-bottom: 1px solid #666;
  color: #666;
  text-decoration: none;
}
</style>