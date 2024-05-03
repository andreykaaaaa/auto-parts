<script setup lang="ts">
interface Props {
  modelValue?: string;
  type?: 'text' | 'password';
  placeholder?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

</script>

<template>
  <input
      class='is-input'
      :type="props.type"
      :placeholder="props.placeholder"
  >

</template>

<style scoped lang="scss">
.is-input {
  font-family: "Manrope", serif;
  font-size: 16px;
  height: 50px;
  max-width: 100%;
  padding: 15px;
  border: none;
  border-radius: 20px;
  color: black;

  &:focus {
    outline: 2px solid #808080;
  }
}

</style>