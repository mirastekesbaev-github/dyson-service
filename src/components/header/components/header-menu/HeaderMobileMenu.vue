<template>
  <div class="header-menu" :class="{ 'open': menuVisible }">
    <div class="header-menu-inner">
      <ul class="list">
        <li v-for="(item, index) in menu" :key="index" class="item" @click="scrollTo(item, true)">
          <a :href="item.href" class="item-link">{{ item.name }}</a>
        </li>
      </ul>

      <div class="bottom">
        <a class="bottom-phone" href="tel: 8 800 005 00 08">
          <UIButton
            btn-name="8 800 005 00 08"
            has-slot
            shimmer
            font-size="24px"
          >
            <UIIcon icon="phone" color="#fff" :size="26"/>
          </UIButton>
        </a>
        <div class="bottom-info">
          <p>Работаем с <span>9:00</span> до <span>18:00</span></p>
          <p>*бесплатный звонок по Казахстану</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UIButton from "../../../ui/Button.vue";
import UIIcon from "../../../ui/Icon.vue";

export default {
  name: "HeaderMobileMenu.vue",
  components: {
    UIButton,
    UIIcon
  },
  data() {
    return {
      menu: [
        {
          href: '#catalog',
          name: 'Что мы ремонтируем?',
          section: 'product-section'
        },
        {
          href: '#benefits',
          name: 'Преимущества',
          section: 'facility-section'
        },
        {
          href: '#process',
          name: 'Процесс ремонта',
          section: 'query-section'
        },
        {
          href: '#contacts',
          name: 'Контакты',
          section: 'contact-section'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      menuVisible: "menuVisible"
    })
  },
  methods: {
    scrollTo(value, isSmall = false) {
      if (isSmall) {
        this.$store.commit("set", ["menuVisible", false]);
        this.$store.commit("set", ["overlayVisible", false])
      }
      const section = document.getElementById(value.section)
      this.$scrollTo(section, 600, { offset: -102 })
    }
  }
}
</script>

<style scoped lang="scss">
.header-menu {
  position: fixed;
  background: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 100px);
  top: 100px;
  z-index: 300;
  transition: 0.3s;
  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }

  &-inner {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 36px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .list {
      .item {
        &-link {
          font-family: 'Raleway', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 180%;
          text-decoration: none;
          color: $gray800;
        }
      }
    }
    
    .bottom {
      margin-bottom: 24px;

      &-phone {
        text-decoration: none;
      }

      &-info {
        margin-top: 20px;

        p:nth-child(1) {
          font-weight: 400;
          font-size: 20px;
          margin-left: 2px;
        }

        p:nth-child(2) {
          font-size: 14px;
          color: $gray600;
        }

        span {
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
        }
      }
    }
  }
}
</style>