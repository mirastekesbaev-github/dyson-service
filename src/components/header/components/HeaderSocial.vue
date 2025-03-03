<template>
  <div class="header-social">
    <div
        v-for="social in socials"
        :key="social.id"
        class="header-social-item"
    >
      <a class="header-social-item-link" :href="social.link" target="_blank">
        <UIIcon
            :icon="social.name"
            :icon-class="social.name"
            :size="38"
            :color="social.color"
            :extra-style="social.style"
        />
      </a>
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
      socials: [
        {
          id: 1,
          name: 'whatsapp',
          link: 'https://wa.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города',
          color: '#25D366'
        },
        {
          id: 2,
          name: 'telegram',
          link: 'https://t.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города',
          color: '#24A1DE'
        },
        {
          id: 3,
          name: 'instagram',
          link: 'https://www.instagram.com/dysonservice.kz?igsh=MXdjam83aGp2cnpyaw==',
          style: {marginRight: '5px'}
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