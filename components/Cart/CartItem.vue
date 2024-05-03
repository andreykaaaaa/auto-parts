<script setup lang="ts">
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
})

const emit = defineEmits(['onClickRemove'])
</script>

<template>
  <div class="cart-item">
    <img :src=imageUrl :alt="title" class="cart-item__img">
    <div class="cart-item__title">
      <p>{{title}}</p>
      <div class="cart-item__title__footer">
        <b>{{price}} руб.</b>
        <ui-l-icon icon="Close"
             class="cart-item__title__footer__btn"
             @click="emit('onClickRemove')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  border: 1px solid rgb(226 232 240);
  padding: 16px;
  border-radius: 12px;
  gap: 16px;

  &__img {
    width: 64px;
    height: 64px;
  }
  &__title {
    display: flex;
    flex-direction: column;

    &__footer {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      flex: 1;

      &__btn {
        opacity: 0.4;
      }

      &__btn:hover {
        opacity: 1;
        cursor: pointer;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
    }
  }
}
b {
  flex: 1;
}
</style>