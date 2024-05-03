<script setup lang="ts">

import type{IconsType} from "~/app/icones";

interface Props {
  icon: IconsType;
  title?: string;
}
interface Emits {
  (e: 'click', value: Event): void
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const makes = [
  'Toyota',
  'Ford',
  'Honda',
  'Chevrolet',
  'Nissan',
  'Hyundai',
  'Kia',
  'Mazda',
  'Subaru',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Mazda',
  'Subaru',
  'Volkswagen',
  'Kia',
  'Mazda',
  'Subaru',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Mazda',
  'Subaru',
  'Volkswagen',
  'Mazda',
  'Subaru',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Mazda',
  'Subaru',
  'Volkswagen'
];
</script>

<template>
  <div class="makes" v-for="(item, index) in makes" :key="index">
    <div class="makes__item">
      {{item}}
      <ui-l-icon :icon=props.icon />
    </div>
  </div>
</template>

<style scoped lang="scss">
.makes {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px 0;
  width: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>