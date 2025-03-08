<template>
  <fragment>
    <div v-if="button === 'instagram'" :class="button" class="widget-button">
      <a
        class="widget-button-inner"
        :class="button"
        href="https://www.instagram.com/dservice.kz"
        target="_blank"
      >
        <img class="widget-button-icon animation" src="../../assets/icons/instagram-line-white.svg" alt="whatsapp">
      </a>
    </div>
    <div v-if="button === 'whatsapp'" :class="button" class="widget-button">
      <a
        class="widget-button-inner"
        :class="button"
        href="https://wa.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города"
        target="_blank"
      >
        <img class="widget-button-icon animation" src="../../assets/icons/whatsapp-line-white.svg" alt="whatsapp">
      </a>
    </div>
    <div v-if="button === 'telegram'" :class="button" class="widget-button">
      <a
        class="widget-button-inner"
        :class="button"
        href="https://t.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города"
        target="_blank"
      >
        <img class="widget-button-icon animation" src="../../assets/icons/telegram-line-white.svg" alt="whatsapp">
      </a>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "WidgetButton",
  props: {
    button: {
      type: String,
      default: () => ""
    }
  }
}
</script>

<style>
.widget-button {
  background-color: transparent;
  z-index: 10000;
  position: fixed;
  right: 2%;
  width: 97px;
  height: 97px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.instagram {
    bottom: 43%;
  }

  &.telegram {
    bottom: 31%;
  }

  &.whatsapp {
    bottom: 19%;
  }
}

.widget-button-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  outline: none;
  border: none;
  border-radius: 50%;
  width: 79px;
  height: 79px;
  cursor: pointer;


  &.instagram {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    box-shadow: 0 0 0 10px rgba(109, 12, 136, 0.1);
  }

  &.telegram {
    background: #24a1de;
    box-shadow: 0 0 0 10px rgba(40, 105, 221, 0.1);
  }

  &.whatsapp {
    background: #00a884;
    box-shadow: 0 0 0 10px rgba(0, 168, 132, .1);
  }
}

.widget-button-icon {
  width: 52px;
  height: 52px;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
}

.animation {
  animation-name: tada;
}

@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

[data-popover='widget'] {
  z-index: 10002;
  padding: 16px 16px !important;
  width: 260px !important;

  span { font-weight: 700; }
  a { color: #101828; }
}

@media screen and (min-width: 992px) {
  .widget-button {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .widget-button {
    transform: scale(.8);
  }
}
</style>