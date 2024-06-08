<template>
  <div class="form">
    <form action="" method="get" @submit.prevent>
      <h4>Add new post</h4>
      <my-input type="text" v-model:value="post.title" placeholder="Title" />
      <my-input type="text" v-model:value="post.body" placeholder="Desctiption" />
      <my-button @click="createPost">Add Post</my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      if (this.post.title.length === 0) {
        alert("Title must not be empty")
        return
      }
      if (this.post.body.length === 0) {
        alert("Body must not be empty")
        return
      }
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column
}

.form * {
  margin-bottom: 6px;
}
</style>