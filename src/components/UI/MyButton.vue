<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style scoped>

button {
  width: 120px;
  padding: 6px;
  background: #929292;
  color: #222;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

.style-black {
  background-color: #222 !important;
  color: #fff !important;
}

.style-red {
  background-color: #b92424 !important;
  color: #fff !important;
}
</style>