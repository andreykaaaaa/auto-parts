<script setup lang="ts">

import axios from "axios";

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
  disabledButton: Boolean
})

const { carts, closeDrawer }: any = inject('cart');
const isCreatingOrder = ref(false);
const order = ref(null)

const isCartEmpty = computed(() => carts.length === 0)
const cartButtonDisabled = computed(() => isCreatingOrder?.value || isCartEmpty.value)
const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await  axios.post(`https://832255bbf035b3c6.mokky.dev/orders`, {
      items: carts,
      totalPrice: props.totalPrice
    })
    carts.splice(0);
    order.value = data.id
  } catch (err) {
    console.error(err)
  } finally {
    isCreatingOrder.value = false;
  }
}
</script>

<template>
  <div class="drawer">

  </div>
  <div class="body-cart">
    <driwer-head icon="Left" @click="closeDrawer"/>
    <div>
      <block-info-block v-if="!totalPrice && !order"
                 title="Корзина пустая"
                 description="Добавьте хотя бы одну пару кросовок, чтобы сделать заказ"
                 image-url="/package-icon.png"
      />
      <block-info-block v-else-if="!totalPrice && order"
                 title="Заказ оформлен!"
                 description="Ваш заказ #18 скоро будет передан курьерской доставке"
                 image-url="/order-success-icon.png"
      />
    </div>

    <CartItemList />

    <div v-if="totalPrice" class="body-cart__info">
      <div class="body-cart__info__price">
        <span>Итого</span>
        <div class="body-cart__info__price__sum"></div>
        <b>{{totalPrice}} руб.</b>
      </div>

      <div class="body-cart__info__price">
        <span>Налог 5%</span>
        <div class="body-cart__info__price__sum"></div>
        <b>{{vatPrice}} руб.</b>
      </div>
      <button class="body-cart__order-btn"
              @click="createOrder"
              :disabled="cartButtonDisabled"
      >
        Перейти к оформлению
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 10;
  opacity: 0.7;
  margin-bottom: 24px;
  transition: .3s;
}

.body-cart {
  background-color: white;
  width: 384px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s;

  .body-cart__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
    transition: .3s;
    &__price {
      display: flex;
      gap: 8px;
      &__sum {
        display: flex;
        flex: 1;
        border-bottom: 1px;
        border-bottom-style: dashed;
      }
    }
  }

  &__order-btn {
    width: 100%;
    border-radius: 12px;
    padding: 12px 0;
    margin-top: 20px;
    background-color: rgb(132 204 22);
    border: none;
    color: white;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    cursor: pointer;
  }

  &__order-btn:hover {
    background-color: rgb(101 163 13);
  }

  &__order-btn:active {
    background-color: rgb(77 124 15);
  }
  &__order-btn:disabled {
    background-color: rgb(148 163 184);
    cursor: no-drop;
  }
}
</style>