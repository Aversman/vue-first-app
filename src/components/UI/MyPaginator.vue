<template>
  <div class="paginator_block">
    <div class="paginator-content">
      <ul>
        <li v-for="p in totalPages" :key="p">
          <button
            @click="this.$emit('change_page', p)"
            :class="p === page ? 'button-active' : ''"
          >
            {{ p }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-paginator',
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true,
    }
  }
}
</script>
<style scoped>
.paginator_block {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin: 5px;
}

button {
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  background-color: #a0a0a0;
  cursor: pointer;
}

.button-active {
  background-color: #222;
  color: #fff;
  font-weight: 600;
}
</style>