<template>
  <div>
    <div class="widget-button">
      <a class="widget-button-inner" href="https://wa.me/+77019300500?text=Здравствуйте!%20Пишу%20из%20города" target="_blank">
        <img class="widget-button-icon animation" src="../../assets/icons/whatsapp-line-white.svg" alt="whatsapp">
      </a>
<!--      <button class="widget-button-inner" v-popover:widget.left>-->
<!--        <img class="widget-button-icon animation" src="../../assets/icons/whatsapp-line-white.svg" alt="whatsapp">-->
<!--      </button>-->
    </div>
<!--    <popover name="widget">-->
<!--      <p style="margin-bottom: 10px;">-->
<!--        <span>г. Астана: </span>-->
<!--        <a href="https://wa.me/+77778037197" target="_blank">-->
<!--          +7 (777) 803-71-97-->
<!--        </a>-->
<!--      </p>-->
<!--      <p>-->
<!--        <span>г. Алматы: </span>-->
<!--        <a href="https://wa.me/+77019300500" target="_blank">-->
<!--           +7 (701) 930-05-00-->
<!--        </a>-->
<!--      </p>-->
<!--    </popover>-->
  </div>
</template>

<script>
export default {
  name: "WidgetButton"
}
</script>

<style>
.widget-button {
  background-color: transparent;
  z-index: 10000;
  position: fixed;
  right: 2%;
  bottom: 19%;
  width: 97px;
  height: 97px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: #00a884;
  box-shadow: 0 0 0 10px rgba(0, 168, 132, .1);
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

@media screen and (max-width: 980px) {
  .widget-button {
    transform: scale(.8);
  }
}
</style>