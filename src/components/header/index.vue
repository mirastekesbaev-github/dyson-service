<template>
  <fragment>
    <HeaderDesktop v-if="desktop" />
    <HeaderMobile v-else />
  </fragment>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderDesktop from "@/components/header/view/HeaderDesktop.vue";
import HeaderMobile from "@/components/header/view/HeaderMobile.vue";

export default {
  name: "HeaderIndex",
  components: {
    HeaderDesktop,
    HeaderMobile
  },
  computed: {
    ...mapGetters({
      desktop: "desktop",
    })
  }
}
</script>
