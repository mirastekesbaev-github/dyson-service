<template>
  <div class="header-contact">
    <a class="header-contact-telephone" href="tel: 8 800 005 00 08">
      <UIButton
        btn-name="8 800 005 00 08"
        has-slot
        shimmer
        font-size="18px"
      >
        <UIIcon icon="phone" color="#fff" :size="26"/>
      </UIButton>
    </a>

    <div class="header-contact-info">
      <p>Работаем с 9:00 до 18:00</p>
      <p>*бесплатный звонок по Казахстану</p>
    </div>
  </div>
</template>

<script>
import UIButton from '../../ui/Button.vue';
import UIIcon from '../../ui/Icon.vue';

export default {
  name: "HeaderWorkTime",
  components: {
    UIButton,
    UIIcon
  }
}
</script>

<style lang="scss" scoped>
.header-contact {
  display: flex;
  flex-direction: column;
  align-items: end;
  
  &-telephone {
    text-decoration: none;
  }
  
  &-info {
    width: 100%;
    text-align: right;

    p:nth-child(1) {
      margin-top: 8px;
      font-size: 16px;
    }

    p:nth-child(2) {
      font-size: 12px;
      line-height: 100%;
      color: $gray500;
    }
  }
}
</style>