<script setup lang="ts">

import {definePageMeta} from "#imports";
import type {EntityCards} from "~/api/entities";
import axios from "axios";

definePageMeta({
  layout: 'default'
})

let items = ref<EntityCards[]>([]);
let carts = reactive<EntityCards[]>([]);
const router = useRouter()
const drawerOpen = ref(false);
const catalogOpen = ref(false);
const isModal = ref(false);
const isModalAuth = ref(false);

const totalPrice = computed(() => carts.reduce((acc, item) => acc + item.price, 0));
const vatPrice = computed(() => Math.round(totalPrice.value * 5) / 100);
const searchNull = ref(false)
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

onMounted(async () => {
  // const localCart = localStorage.getItem('carts')
  // carts = localCart ? JSON.parse(localCart) : [];
  await fetchItems();

  // items.value = items.value.map((item) => ({
  //   ...item,
  //   isAdded: carts.some((cartItem) => cartItem.id === item.id)
  // }))
})

async function fetchItems() {
  const params = {
    sortBy: filters.sortBy,
    title: `*${filters.searchQuery}*`
  }
  try {
    const {data} = await axios.get(`https://832255bbf035b3c6.mokky.dev/items`, {
      params
    })
    if (params.title.length !== 2 && data.length === 0) {
      searchNull.value = true;
    } else {
      searchNull.value = false;
    }
    items.value = data.map((obj: any) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.error(err)
  }
}

watch(filters, fetchItems)
// watch(carts, () => {
//   localStorage.setItem('carts', JSON.stringify(carts))
//   console.log(carts)
// }, { immediate: true, deep: true })
// watch(carts, () => {
//   items.value = items.value.map((item) => ({
//     ...item,
//     isAdded: false
//   }))
// }, { immediate: true })

// const fetchFavorites = async () => {
//   try {
//     const { data: favorites } = await  axios.get(`https://832255bbf035b3c6.mokky.dev/favorites`)
//     items.value = items.value.map(item => {
//       const favorite = favorites.find((favorite: any) => favorite.itemId === item.id)
//       if(!favorite) {
//         return item
//       }
//       return {
//         ...item,
//         isFavorite: true,
//         favoriteId: favorite.id
//       }
//     })
//   }
//   catch (err) {
//     console.error(err)
//   }
// }
function onChangeSelect(event: any) {
  filters.sortBy = event.target.value
}

const addToFavorite = async (item: EntityCards) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        itemId: item.id
      };
      const response = await useFetch(`https://832255bbf035b3c6.mokky.dev/favorites`, {
        method: 'POST',
        body: obj
      })
      if (response.data && typeof response.data === 'object') {
        item.isFavorite = true;
        item.favoriteId = (response.data as { value: { id: number } }).value.id;
      }
    } else {
      await useFetch(`https://832255bbf035b3c6.mokky.dev/favorites/${item.favoriteId}`, {
        method: 'DELETE'
      })
      item.isFavorite = false;
      item.favoriteId = null;
    }
  } catch (err) {
    console.error(err)
  }
}
const addToCart = (item: EntityCards) => {
  carts.push(item)
  item.isAdded = true;
}
const removeFromCart = (item: EntityCards) => {
  carts.splice(carts.indexOf(item), 1);
  item.isAdded = false;
}
const onClickAddPlus = (item: EntityCards) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const openModal = () => {
  isModal.value = true;
  isModalAuth.value = true;
}

const closeModal = () => {
  isModal.value = false;
}
const openDrawer = () => {
  drawerOpen.value = true;
}
const openCatalog = () => {
  catalogOpen.value = true;
}
const onChangeSearchInput = (event: any) => {
  filters.searchQuery = event.target.value
}
const closeDrawer = () => {
  drawerOpen.value = false;
}
const closeCatalog = () => {
  catalogOpen.value = false;
}

// function filterByDate(events:Cards[], date: Date) {
//   return events.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getTime() === date.getTime();
//   });
// }

const selectedDate = ref('')
// const saveDate = () => {
//   selectedDate.value
//   const filter = filterByDate(items.value, new Date(selectedDate.value));
//   console.log(filter)
// }
provide('cart', {
  carts,
  closeDrawer,
  openDrawer,
  openCatalog,
  closeCatalog,
  addToCart,
  removeFromCart,
  openModal,
  closeModal
})

</script>

<template>
  <transition name="fade">
    <driwer-drawer v-if="drawerOpen"
                   :total-price="totalPrice"
                   :vat-price="vatPrice"
    />
  </transition>
  <catalog v-if="catalogOpen"/>
  <div class="body">
    <block-header @open-drawer="openDrawer"
                  @open-catalog="openCatalog"
                  @open-modal="openModal"
                  :total-price="totalPrice"
    />

    <div class="modal-auth" v-if="isModal && isModalAuth">
      <modal-auth-modal-form @close-modal="closeModal"/>
    </div>
    <div class="body__items" v-else-if="!isModal">
      <div class="body__items__header">
        <h2>Все кроссовки</h2>
        <div class="body__items__header__func">
          <div class="body__items__header__func__search animated zoomIn">
            <input
                @input="onChangeSearchInput"
                class="body__items__header__func__search__form"
                type="text"
                placeholder="Поиск..."
            >
          </div>
          <select @change="onChangeSelect" class="body__items__header__func__select animated zoomIn fadeIn">
            <option value="name" class="animated zoomIn fadeIn">По алфавиту</option>
            <option value="price" class="animated zoomIn fadeIn">Дешевые</option>
            <option value="-price" class="animated zoomIn fadeIn">Дорогие</option>
          </select>
        </div>
      </div>
      <div class="body__items__cards" v-if="!searchNull" @click="() => router.push(`/items/1`)">
        <cart-card-list
            :items=items
            @add-to-favorite="addToFavorite"
            @add-to-cart="onClickAddPlus"
        />
      </div>
      <div v-else-if="searchNull" class="body__items__not-found">
        <img src="public/emoji-1.png" alt="notFound" class="body__items__not-found__emoji">
        <h2>К сожалению, данный товар не найден</h2>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

.body {
  &__items {
    padding: 40px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-around;

      &__func {
        display: flex;
        align-items: center;
        gap: 16px;

        &__select {
          padding: 8px 12px;
          border: 3px solid rgb(241 245 249);
          outline: none;
          font-size: 18px;

          &:focus {
            outline: none;
          }
        }

        &__search {
          position: relative;

          &__img {
            position: absolute;
            left: 8px;
            top: 10px;
          }

          &__form {
            border: 3px solid rgb(241 245 249);
            border-radius: 6px;
            padding: 8px 16px 8px 44px;
            outline: none;
            width: 650px;
            font-size: 20px;
          }

          &__form:focus {
            border: 3px solid rgb(156 163 175);
          }
        }
      }
    }

    &__cards {
      margin-top: 40px;
    }

    &__not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;

      &__emoji {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
}

.modal-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
}

option {
  transition: background .3s ease-out;
}
</style>