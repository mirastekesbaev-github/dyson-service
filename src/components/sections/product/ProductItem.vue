<template>
  <div class="product">
    <div class="product__image">
      <img v-if="img === 'styler'" src="@/assets/img/Стайлер.png" alt="styler">
      <img v-if="img === 'dryer'" src="@/assets/img/Сушилка.png" alt="dryer">
      <img v-if="img === 'humidifier'" src="@/assets/img/УвлажнительВоздуха.jpg" alt="humidifier">
      <img v-if="img === 'hairdryer'" src="@/assets/img/Фен.png" alt="hairdryer">
      <img v-if="img === 'vacuum'" src="@/assets/img/Пылесос.png" alt="vacuum">
      <img v-if="img === 'rectifier'" src="@/assets/img/Выпрямитель.png" alt="rectifier">
      <p
        class="product__name"
        :style="{
          marginTop:
           img === 'vacuum' ? '48px' : '' ||
           img === 'dryer' ? '64px' : '' ||
           img === 'humidifier' ? '48px' : ''
        }"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    img: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.product {

  &__image {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  &__name {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
