<template>
  <div class="header-social-icon">
    <div
      v-for="icon in icons"
      :key="icon.id"
      class="header-social-icon__item"
    >
      <UIIcon :icon="icon.name"></UIIcon>
    </div>
  </div>
</template>

<script>
import UIIcon from "../../ui/Icon.vue"

export default {
  name: "HeaderSocialIcon",
  components: {
    UIIcon
  },
  data() {
    return {
      icons: [
        {
          id: 1,
          name: 'phone',
          link: ''
        },
        {
          id: 2,
          name: 'instagram',
          link: ''
        },
        {
          id: 3,
          name: 'whatsapp',
          link: ''
        },
        {
          id: 4,
          name: 'telegram',
          link: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>