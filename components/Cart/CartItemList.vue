<script setup lang="ts">
const { carts, removeFromCart }: any = inject('cart');

</script>

<template>
  <div class="cards" v-auto-animate>
    <cart-item
        v-for="item in carts"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :image-url="item.imageUrl"
        @on-click-remove="removeFromCart(item)"
    />
  </div>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>