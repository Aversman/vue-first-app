<template>
  <post-form @create="createPost" />
  <h4 class="heading">Filter</h4>
  <my-input v-focus v-model:value="searchText" style="margin-bottom: 10px"  type="text" placeholder="Search..." />
  <my-select v-model="selectedSort" :options="sortOptions" />
  <my-loader v-if="isPostLoaded === false" />
  <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost"/>
  <!-- <my-paginator @change_page="changePage" :page="page" :totalPages="totalPages" /> -->
  <div v-intersection="{fetchPosts: fetchPosts}" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      isPostLoaded: false,
      selectedSort: '',
      searchText: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By description'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    /* changePage(p) {
      this.page = p
    }, */
    async fetchPosts() {
      try {
        if (this.page > this.totalPages & this.totalPages !== 0) {
          return
        }
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`);
        this.posts = [...this.posts, ...res.data]
        this.isPostLoaded = true
        this.page++
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
      }catch (e) {
        alert(e)
      }
    }
  },
  mounted() {
    
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()))
    }
  },
  watch: {
    /* page() {
      this.fetchPosts();
    } */
  }
}
</script>

<style scoped>

.heading {
  margin-bottom: 5px;
}

.observer {
  width: 100%;
  height: 40px;
  background-color: transparent;
  display: inline-block;
}
</style>