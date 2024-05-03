<script setup lang="ts">
const router = useRouter()
defineProps({
  items: Array
})

const emit = defineEmits([
  'addToFavorite',
  'addToCart'
])
const navigate = (id: number) => {
  router.push(`/${id}`)
}
</script>

<template>
  <div class="cards" v-auto-animate>
    <cart-card v-for="item in items" :key="item.id"
               :id="item.id"
               :image-url="item.imageUrl"
               :title="item.title"
               :price="item.price"
               :is-added="item.isAdded"
               :is-favorite="item.isFavorite"
               :on-click-favorite="() => emit('addToFavorite', item)"
               :on-click-add="() => emit('addToCart', item)"
               @click="navigate(item.id)"
    />
  </div>

</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
</style>