<script setup lang="ts">
const { closeCatalog }: any = inject('cart');
</script>

<template>
  <div class="catalog">

  </div>
  <div class="body-catalog">
    <catalog-head icon="Close" @click="closeCatalog"/>
    <catalog-makes icon="Right" />
  </div>

</template>

<style scoped lang="scss">

.catalog {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 10;
  opacity: 0.7;
  margin-bottom: 24px;
}
.body-catalog {
  background-color: white;
  width: 284px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
}
</style>