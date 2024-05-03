<script setup lang="ts">
import {UseLoader} from "~/components/ui/types/loader";

interface Props {
  modelValue: UseLoader;
}

const props = defineProps<Props>();

const value = props.modelValue;
const status = ref(value.status);
</script>

<template>
  <transition name="fade-without-enter">
    <div
        class="loader"
        v-if="status"
    >
      <img src="/loader.svg" alt="Loader">
      <div>Загрузка...</div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--secondary-color);

  user-select: none;

  & img {
    height: min(230px, 70%);
  }
  & div {
    font-weight: 600;
    font-size: min(24px, 3vh);
  }
}
</style>
