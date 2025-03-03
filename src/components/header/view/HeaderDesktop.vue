<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
          <HeaderLogo />
        </div>
        <div class="header-center">
<!--          <div class="header-center-top">-->
<!--            <HeaderSocial />-->
<!--          </div>-->
<!--          <div class="header-center-bottom">-->
<!--            <HeaderDesktopMenu />-->
<!--          </div>-->
          <HeaderDesktopMenu />
          <HeaderSocial/>
        </div>
        <div class="header-right">
          <HeaderTime />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "../../header/components/HeaderLogo.vue";
import HeaderSocial from "../../header/components/HeaderSocial.vue";
import HeaderDesktopMenu from "../../header/components/header-menu/HeaderDesktopMenu.vue";
import HeaderContact from "../components/HeaderContact.vue";

export default {
  name: "HeaderAlternate",
  components: {
    HeaderLogo,
    HeaderSocial,
    HeaderDesktopMenu,
    HeaderTime: HeaderContact
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .header {
    display: none;
  }
}

.header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  padding: 14px 0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &-center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: {
      left: 1px solid $gray300;
      right: 1px solid $gray300;
    };
    padding: 0 6px;
  }

  &-right {
    width: 212px;
    min-width: 212px;
  }
}
</style>