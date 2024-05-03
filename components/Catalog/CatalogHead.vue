<script setup lang="ts">
import {type IconsType} from "~/app/icones";

interface Props {
  icon: IconsType;
  title?: string;
}
interface Emits {
  (e: 'click', value: Event): void
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

</script>

<template>
  <div class="catalog-header">
    <h2>Каталог</h2>
    <ui-l-icon :icon="props.icon" class="catalog-header__btn" @click="emit('click', $event)" />
  </div>
</template>

<style scoped lang="scss">
.catalog-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 32px;

  &__btn {
    cursor: pointer;
    opacity: 0.7;
    width: 34px;
    height: 34px;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  &__btn:hover {
    opacity: 1;
    transform: translateX(10px);
  }
}
</style>