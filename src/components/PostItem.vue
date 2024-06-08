<template>
  <div class="post">
    <div class="post_data">
      <div><strong>#</strong> {{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="buttons-block">
      <my-button class="style-black" @click="$router.push(`/posts/${post.id}`)">More</my-button>
      <my-button class="style-red" @click="$emit('remove', post)">Delete Post</my-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 2px solid #acacac;
}

.buttons-block {
  display: flex;
  gap: 8px;
}

.post_data div {
  margin-right: 40px;
}
</style>