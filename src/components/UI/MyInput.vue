<template>
  <input :value="value" @input="updateInput" />
</template>
<script>
export default {
  name: 'my-input',
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>
<style scoped>
input {
  width: 100%;
  height: auto;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #acacac;
  color: #000;
  outline: none;
  transition: border .3s;
}

input:focus {
  border-color: #222;
}
</style>