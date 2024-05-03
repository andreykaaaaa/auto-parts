<script setup lang="ts">

const emit = defineEmits(['closeModal'])
const isModalRegistration = ref(false);
const openModalRegistration = () => {
  isModalRegistration.value = true;
}
const closeModalRegistration = () => {
  isModalRegistration.value = false;
}

</script>

<template>
  <form
      @submit.prevent=''
      class='auth-form'
  >
    <div class='auth-form__header'>
      <div class="auth-form__header__return" v-if="isModalRegistration" @click="closeModalRegistration">
        <ui-l-icon icon="Left" />
      </div>
      <div class="auth-form__header__text" :class="{'registration':isModalRegistration}">
        <p v-if="isModalRegistration">Регистрация</p>
        <p v-else>Авторизация</p>
      </div>
      <div class="auth-form__header__close" @click="() => emit('closeModal')">
         <ui-l-icon icon="Close" class="auth-form__header__close__img"/>
      </div>
    </div>
    <ui-i-input
        placeholder='Логин'
    />
    <ui-i-input
        type='password'
        placeholder='Пароль'
    />
    <ui-i-input v-if="isModalRegistration"
        type='password'
        placeholder='Подтвердите пароль'
    />
    <ui-i-button class='auth-form__submit' />

    <div class="auth-form__registration" v-if="!isModalRegistration">
      <p>Если у Вас еще нет аккаунта, пожалуйста сначала
        <b class="auth-form__registration__btn" @click="openModalRegistration">зарегестрируйтесь</b>
      </p>
    </div>
  </form>
</template>

<style scoped lang="scss">

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding-bottom: 30px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(201, 201, 201, 0.24) 0%, rgba(196, 196, 196, 0.03) 100%);
  box-shadow: 9.0363340378px 9.0363340378px 13.5545024872px 0 rgba(102, 18, 100, 0.2);
  backdrop-filter: blur(25px);

  &__header {
    display: flex;
    justify-content: space-around;
    padding: 10px 5px;
    width: 100%;
    height: max-content;
    font-size: 26px;
    margin-bottom: 30px;
    line-height: 1.1;

    &__return {
      opacity: 0.5;
      display: flex;
      width: 28px;
      height: 28px;
      padding-left: 10px;

      &:hover {
        opacity: 1;
        transition: 1s;
      }
    }

    &__text {
      padding-top: 30px;
      padding-left: 30px;
      margin: 0 auto;
      color: #808080;
    }

    &__close {
      display: flex;
      width: 40px;
      height: 40px;
      gap: 10px;
      &:hover {
        opacity: 1;
        border: 1px solid red;
        border-radius: 50%;
        transition: 0.1s;
      }
    }
  }

  &__submit {
    margin-top: 10px;
    width: max-content;
  }

  &__registration {
    font-size: 12px;
    font-weight: 500;
    color: gray;
    display: flex;
    align-items: center;
    text-align: center;

    &__btn {
      cursor: pointer;
      font-weight: 700;
    }
  }
}

.registration {
  padding-left: 0 !important;
}


</style>
