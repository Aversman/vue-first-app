<template>
  <div class="app">
    <my-header :companyName="companyName"></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'My blog'
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
}

body {
  overflow-x: hidden;
}

.app {
  padding: 20px;
}
</style>