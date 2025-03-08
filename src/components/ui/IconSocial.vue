<template>
  <div
    class="icon-wrap"
    :class="{ ripple: 'ripple' }"
    :style="{ background }"
  >
    <svg
      class="icon"
      :class="[iconClass]"
      :style="{
        width: iconSize,
        height: iconSize,
        color,
        background,
        ...extraStyle,
      }"
    >
      <use v-if="icon === 'whatsapp'" href="../../assets/icons/sprite.svg#whatsapp"></use>
      <use v-if="icon === 'telegram'" href="../../assets/icons/sprite.svg#telegram"></use>
      <use v-if="icon === 'instagram'" href="../../assets/icons/sprite.svg#instagram"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DynamicIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: () => 24
    },
    color: {
      type: String,
      default: () => '#000'
    },
    background: {
      type: String,
      default: () => 'transparent'
    },
    ripple: {
      type: Boolean,
      default: () => false
    },
    extraStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    iconClass() {
      return `icon-${this.icon}`;
    },
    iconSize() {
      return `${this.size}px`;
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  color: currentColor;
  border-radius: 50%;
  &-wrap {
    &.ripple {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: relative;
      width: 38px;
      height: 38px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: inherit;
        z-index: -1;
        animation: ripple 2s ease-out infinite;
      }

      @keyframes ripple {
        from {
          opacity: 1;
          transform: scale(0);
        }
        to {
          opacity: 0;
          transform: scale(1.74);
        }
      }
    }
  }
}
</style>