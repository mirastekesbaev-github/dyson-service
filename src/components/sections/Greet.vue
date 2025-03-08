<template>
  <section id="start-section">
    <div class="container h100">
      <div class="content h100 flex fdc jcc">
        <h2 class="title">Ремонт всех устройств <span>Dyson</span> с предоставлением гарантии на 1 год </h2>
        <ul class="list">
          <li v-for="(item, index) in list" :key="index" class="item">
            <UIIcon icon="check" color="#e7aaff" :size="34"></UIIcon>
            <p class="text">{{ item.text }}</p>
          </li>
        </ul>
        <div class="content__button">
          <UIButton
            btn-name="Позвоните мне"
            :style="{ padding: '10px 24px' }"
            @click="openOrderModal"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/Button.vue'
import UIIcon from '@/components/ui/Icon.vue'

export default {
  name: 'GreetSection',
  components: { UIButton, UIIcon },
  data() {
    return {
      list: [
        { text: 'Online/Offline диагностика' },
        { text: 'Бесплатная доставка до центра технического обслуживания и обратно по всему Казахстану' },
        { text: 'Оригинальные запчасти на все устройства' },
        { text: 'Авторизованный Центр технического обслуживания  ' },
        { text: 'Верификация устройства dyson' },
        { text: 'Постгарантийное обслуживание' }
      ]
    }
  },
  methods: {
    openOrderModal() {
      this.$modal.show('order-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
#start-section {
  z-index: 0;
  position: relative;
  background-image: url("@/assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: calc(100vh - 86px);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .6);
  }

  .content {
    .title {
      z-index: 10;
      margin-bottom: 16px;
      font-size: 44px;
      font-weight: 700;
      line-height: 100%;
      color: #fff;

      span {
        font-family: 'Open Sans', sans-serif;
        font-weight: 900;
        color: rgb(216, 155, 240);
      }
    }

    .list {
      margin-bottom: 22px;
      .item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        .icon {
          z-index: 10;
          margin-right: 12px;
          width: 32px;
          height: 32px;
          min-width: 32px;
          min-height: 32px;
          fill: #e7aaff;
        }

        .text {
          font-size: 28px;
          font-weight: 400;
          line-height: 108%;
          color: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #start-section {
    .content {
      .title {
        text-align: center;
        font-size: 36px;
      }

      .list {
        .item {
          margin-bottom: 12px;
          .text {
            font-weight: 400;
            font-size: 22px;
            line-height: 100%;
          }
        }
      }

      &__button {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
