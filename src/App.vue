<template>
  <div id="app">
    <transition name="fade">
      <div v-if="overlayVisible" class="overlay" @click="close" />
    </transition>
    <Header />
    <main class="main">
      <Greet />
      <Product />
      <Order />
      <Facility />
      <Query />
      <Contact />
    </main>
    <OrderModal />
    <OrderSuccessModal />
    <OrderErrorModal />
    <WidgetButton button="instagram" />
    <WidgetButton button="telegram" />
    <WidgetButton button="whatsapp" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from '@/components/header/index.vue'
import Greet from '@/components/sections/Greet.vue'
import Product from '@/components/sections/product/Product.vue'
import Order from '@/components/sections/Order.vue'
import Facility from '@/components/sections/facility/Facility.vue'
import Query from '@/components/sections/Query.vue'
import Contact from '@/components/sections/Contact.vue'
import OrderModal from '@/components/modal/OrderModal.vue'
import OrderSuccessModal from '@/components/modal/OrderSuccessModal.vue'
import OrderErrorModal from '@/components/modal/OrderErrorModal.vue'
import WidgetButton from '@/components/widget/WidgetButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    Greet,
    Product,
    Order,
    Facility,
    Query,
    Contact,
    OrderModal,
    OrderSuccessModal,
    OrderErrorModal,
    WidgetButton
  },
  data() {
    return {
      innerWidth: window.innerWidth
    }
  },
  computed: {
    ...mapGetters({
      overlayVisible: 'overlayVisible',
      desktop: 'desktop',
      viewport: 'viewport'
    })
  },
  mounted () {
    this.$store.commit("set", ["desktop", this.innerWidth > this.viewport]);
    window.addEventListener('resize', this.resize);
  },
  methods: {
    close() {
      this.$store.commit("set", ["menuVisible", false]);
      this.$store.commit("set", ["overlayVisible", false]);
    },
    resize() {
      this.$store.commit("set", ["desktop", this.innerWidth > this.viewport]);
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  #app {
    position: relative;

    .main {
      padding-top: 116px;
    }
  }
}

@media screen and (max-width: 992px) {
  #app {
    position: relative;

    .overlay {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
    }

    .main {
      padding-top: 102px;
    }
  }
}
</style>

