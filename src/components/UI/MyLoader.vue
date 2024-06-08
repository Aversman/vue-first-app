<template>
  <div class="loader">
    <div class="loader-content">
      <span class="loader-elem">Loading</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-loader'
}
</script>
<style scoped>
.loader-content {
  width: 100%;
  display: flex;
  justify-content: center
}

.loader-elem {
  color: #222;
  display: inline-block;
  position: relative;
  font-size: 18px;
  box-sizing: border-box;
}

.loader-elem::after {
  content: '';  
  width: 5px;
  height: 5px;
  background: currentColor;
  position: absolute;
  bottom: 5px;
  right: -10px;
  box-sizing: border-box;
  animation: animloader .7s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 10px 0 #222, 20px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 10px 0 #222, 20px 0 #222;
  }
}
</style>