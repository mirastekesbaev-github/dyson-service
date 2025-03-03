<template>
  <fragment>
    <HeaderDesktop />
    <HeaderMobile />
  </fragment>
</template>

<script>
import HeaderDesktop from "@/components/header/view/HeaderDesktop.vue";
import HeaderMobile from "@/components/header/view/HeaderMobile.vue";

export default {
  name: "HeaderIndex",
  components: {
    HeaderDesktop,
    HeaderMobile
  }
}
</script>
