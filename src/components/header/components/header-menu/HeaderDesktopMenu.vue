<template>
  <nav class="header-menu">
    <ul class="header-menu-list list flex aic">
      <li
          v-for="(item, index) in menu"
          :key="index"
          class="list-item"
          @click="scrollTo(item)"
      >
        <a
            :href="item.href"
            class="list-item-link"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderMenu",
  data() {
    return {
      menu: [
        { href: '#catalog', name: 'Что мы ремонтируем?', section: 'product-section' },
        { href: '#benefits', name: 'Преимущества', section: 'facility-section' },
        { href: '#process', name: 'Процесс ремонта', section: 'query-section' },
        { href: '#contacts', name: 'Контакты', section: 'contact-section' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      viewport: "viewport"
    }),
    scrollOptions() {
      if (this.viewport <= 992) return { offset: -100 };
      return {};
    }
  },
  methods: {
    scrollTo(value, isSmall = false) {
      if (isSmall) {
        this.$store.commit("set", ["menuVisible", false]);
        this.$store.commit("set", ["overlayVisible", false])
      }
      const section = document.getElementById(value.section)
      this.$scrollTo(section, 750, this.scrollOptions);
    }
  }
}
</script>

<style scoped lang="scss">
.header-menu {
  .list-item {
    margin: {
      right: 8px;
      left: 8px;
    }
    &-link {
      position: relative;
      font-size: 17px;
      font-weight: 400;
      color: $gray900;
      text-decoration: none;
      transition: .2s linear;
      &:hover {
        background: -webkit-linear-gradient(21deg, #dd03e4, #5611ec);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background: linear-gradient(21deg, #dd03e4, #5611ec);
        transform-origin: bottom right;
        transition: transform .2s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}
</style>