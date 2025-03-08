<template>
  <div class="header-social">
    <div
        v-for="social in socials"
        :key="social.id"
        class="header-social-item"
    >
      <a class="header-social-item-link" :href="social.link" target="_blank">
        <UIIconSocial
          :icon="social.name"
          :icon-class="social.name"
          :size="30"
          :color="social.color"
          :background="social.background"
          :extra-style="social.style"
          ripple
        />
      </a>
    </div>
  </div>
</template>

<script>
import UIIconSocial from "../../ui/IconSocial.vue"

export default {
  name: "HeaderSocialIcon",
  components: {
    UIIconSocial
  },
  data() {
    return {
      socials: [
        {
          id: 1,
          name: 'whatsapp',
          link: 'https://wa.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города',
          color: '#FFF',
          background: '#00A884'
        },
        {
          id: 2,
          name: 'telegram',
          link: 'https://t.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города',
          color: '#FFF',
          background: '#24A1DE'
        },
        {
          id: 3,
          name: 'instagram',
          link: 'https://www.instagram.com/dysonservice.kz?igsh=MXdjam83aGp2cnpyaw==',
          color: '#FFF',
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.header-social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;

  &-item {
    margin: 4px;

    &-link {
      display: inline-block;
      width: 100%;
      height: auto;
    }
  }
}
</style>