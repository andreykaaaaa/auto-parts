<script setup lang="ts">
import type {IconsType} from "~/app/icones";

interface Props {
  icon: IconsType;
  title?: string;
}
interface Emits {
  (e: 'click', value: Event): void
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="cart-header">
    <ui-l-icon :icon="props.icon" @click="emit('click', $event)" class="cart-header__btn"/>
    <h2>Корзина</h2>
  </div>
</template>

<style scoped lang="scss">
.cart-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;

  &__btn {
    cursor: pointer;
    opacity: 0.3;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    width: 20px;
    height: 20px;
    color: black;
  }
  &__btn:hover {
    opacity: 1;
    transform: translateX(-10px);
  }
}
</style>