<template>
  <header class="header">
    <div class="header__left">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="header__center">
      <HeaderSocialIcon></HeaderSocialIcon>
      <HeaderContact></HeaderContact>
      <HeaderMenu></HeaderMenu>
    </div>
    <div class="header__right">
      <HeaderTime></HeaderTime>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "../header/components/HeaderLogo.vue";
import HeaderSocialIcon from "../header/components/HeaderSocialIcon.vue";
import HeaderContact from "../header/components/HeaderContact.vue";
import HeaderMenu from "../header/components/HeaderMenu.vue";
import HeaderTime from "../header/components/HeaderTime.vue";

export default {
  name: "HeaderAlternate",
  components: {
    HeaderLogo,
    HeaderSocialIcon,
    HeaderContact,
    HeaderMenu,
    HeaderTime
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  width: 100%;
  background: lightgray;
}

</style>