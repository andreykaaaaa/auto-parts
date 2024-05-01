<script setup lang="ts">
</script>

<template>
  <div class="default">
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">

.default {
  background-color: rgb(247 254 231);
  height: max-content;
  min-height: 100%;
}
.body {
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  height: max-content;
}
</style>