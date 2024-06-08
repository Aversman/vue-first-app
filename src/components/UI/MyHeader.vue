<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <h4>{{ companyName }}</h4>
      </div>
      <div class="header-links">
        <router-link class="header-link" active-class="header-link-active" to="/">Home</router-link>
        <router-link class="header-link" active-class="header-link-active" to="/about">About</router-link>
        <router-link class="header-link" active-class="header-link-active" to="/posts">Posts</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-header',
  props: {
    companyName: {
      type: String,
      required: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 16px;
  background-color: #222;
}

.header * {
  color: #fff;
}

.header-content {
  display: flex;
  width: 100%;
  justify-content: space-between
}

.header-logo h4 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .5px;
  text-transform: capitalize;
}

.header-links {
  display: flex;
}

.header-link {
  font-size: 16px;
  padding: 4px;
  transition: border .3s;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  margin: 0 7px;
}

.header-link-active {
  border-color: #fff !important;
}

.header-link:hover,
.header-link:focus {
  border-color: #fff;
}
</style>