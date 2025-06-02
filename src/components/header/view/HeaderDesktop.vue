<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
          <HeaderLogo />
        </div>
        <div class="header-center">
          <HeaderDesktopMenu />
          <div class="header-center-right">
            <HeaderSocial />
          </div>
        </div>
        <div class="header-right">
          <HeaderContact />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "../../header/components/HeaderLogo.vue";
import HeaderSocial from "../components/HeaderSocial.vue";
import HeaderDesktopMenu from "../../header/components/header-menu/HeaderDesktopMenu.vue";
import HeaderContact from "../components/HeaderContact.vue";

export default {
  name: "HeaderAlternate",
  components: {
    HeaderLogo,
    HeaderSocial,
    HeaderDesktopMenu,
    HeaderContact
  },
  methods: {
    openOrderModal() {
      this.$modal.show('order-modal')
    }
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
  z-index: 500;
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

    &-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &-right {
    width: 212px;
    min-width: 212px;
  }
}
</style>