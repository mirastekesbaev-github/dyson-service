<template>
  <div class="header">
    <HeaderLogo />
    <HeaderBurger />
    <HeaderMobileMenu />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderLogo from '../../header/components/HeaderLogo.vue';
import HeaderBurger from "../../header/components/header-menu/HeaderBurger.vue";
import HeaderMobileMenu from "../../header/components/header-menu/HeaderMobileMenu.vue";

export default {
  components: {
    HeaderLogo,
    HeaderBurger,
    HeaderMobileMenu
  },
  computed: {
    ...mapGetters({
      menuVisible: "menuVisible"
    })
  },
  mounted() {
    console.log("Component mounted.", this.menuVisible);
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 36px;
  z-index: 500;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 992px) {
  .header {
    display: none;
  }
}
</style>