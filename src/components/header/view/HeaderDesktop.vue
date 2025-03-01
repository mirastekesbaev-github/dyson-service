<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
          <HeaderLogo />
        </div>
        <div class="header-center">
          <div class="header-center-top">
            <HeaderSocial />
          </div>
          <div class="header-center-bottom">
            <HeaderDesktopMenu />
          </div>
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
.header {
  position: fixed;
  z-index: 1000;
  height: 110px;
  width: 100%;
  padding: 14px 0;
  background: #fff;

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
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &-right {
    width: 258px;
  }
}
</style>