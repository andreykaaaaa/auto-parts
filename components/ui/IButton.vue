<script setup lang="ts">

</script>

<template>
  <button class="btn">
    Войти
  </button>
</template>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  padding: 15px 30px;
  background: rgb(255,107,0); /* Old browsers */
  background: linear-gradient(to right, rgba(255,107,0,1) 0%,rgba(255,188,20,1) 50%,rgba(255,107,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6b00', endColorstr='#ff6b00',GradientType=1 );
  background-size: 300%;
  color: #fff;
  letter-spacing: 2px;
  font-size: 18px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  -webkit-transition: background 0.6s ease-in;
  -moz-transition: background 0.6s ease-in;
  -ms-transition: background 0.6s ease-in;
  -o-transition: background 0.6s ease-in;
  transition: background 0.6s ease-in;
  border: none;
  margin-top:30px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background-position: 100%;
  }
}
</style>