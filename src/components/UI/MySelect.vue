<template>
  <select @change="changeOption">
    <option selected disabled value="">Choose...</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style scoped>
select {
  width: 120px;
  background: #f0f0f0;
  border: 1px solid #555;
  padding: 6px;
  border-radius: 6px;
  outline: none;
}
</style>