<template>
  <div v-if="posts.length === 0">
    <p class="p-gray">Post list is empty...</p>
  </div>
  <div>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
</template>
<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.p-gray {
  font-size: 14px;
  font-weight: 400;
  color: #797979;
}

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>