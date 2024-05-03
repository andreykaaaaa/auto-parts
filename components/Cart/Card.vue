<script setup lang="ts">

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<template>
  <div class="card" v-auto-animate>
    <!--    <img-->
    <!--        :src="isFavorite ? '/flat-color-icons&#45;&#45;like.svg' : '/like.svg'"-->
    <!--        alt="Like"-->
    <!--        class="card__like"-->
    <!--        @click="onClickFavorite"-->
    <!--    >-->
    <ui-l-icon v-if="isFavorite"
               icon="Like"
               class="card__like"
               @click="onClickFavorite"/>
    <ui-l-icon v-if="!isFavorite"
               icon="LikeWithoutBackround"
               class="card__like"
               @click="onClickFavorite"/>
    <img :src="imageUrl" alt="Sneaker" class="card__img">
    <p>{{ title }}</p>

    <div class="card__title">
      <div class="card__title__price">
        <span>Цена</span>
        <b>{{ price }} руб</b>
      </div>
      <ui-l-icon v-if="isAdded" icon="Checked" @click="onClickAdd"/>
      <ui-l-icon v-if="!isAdded" icon="Plus" @click="onClickAdd"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  background-color: white;
  border-width: 1px;
  border-color: rgb(241 245 249);
  border-radius: 24px;
  padding: 10px;
  cursor: pointer;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;

  &__img {
    width: 226px;
  }

  &__like {
    position: absolute;
    top: 32px;
    left: 32px;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    &__price {
      display: flex;
      flex-direction: column;
    }
  }
}

.card:hover {
  transform: translateY(-20px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

p {
  margin-top: 5px;
}

span {
  color: rgb(148 163 184);
}

</style>