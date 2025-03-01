<template>
  <button
    :type="type" 
    class="button-component"
    :style="{ 
      fontSize: fontSize,
      width: display === 'block' ? '100%' : width
    }"
    :class="[
      { 'load': load },
      { 'shimmer': shimmer }
    ]"
    :disabled="load"
    @click="$emit('click')"
  >
    <slot></slot>
    <span :style="{ marginLeft: hasSlot ? '8px' : '' }" class="button-component-text">{{ btnName }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    btnName: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    display: {
      type: String,
      required: false,
      default: () => 'inline-block'
    },
    width: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'button'
    },
    load: {
      type: Boolean,
      default: () => false
    },
    shimmer: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    hasSlot() {
      return this.$slots.default && this.$slots.default.length;
    }
  }
}
</script>

<style lang="scss" scoped>
.button-component {
  position: relative;
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  transition: all .2s linear;

  &:hover {
    -webkit-filter: brightness(120%);
    filter: brightness(120%);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.96);
  }

  &.shimmer::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -100%;
    width: 12px; /* Ширина полосы */
    height: 140%;
    opacity: .8;
    transform: rotate(30deg);
    background: linear-gradient(#eee 40%, #fafafa 50%, #eee 60%); /* Цвет полосы */
    filter: blur(8px); /* Размытие по бокам */
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -25%;
    }
    100% {
      left: 225%;
    }
  }

  &.shimmer:hover::before {
    background: none;
  }

  &-text {
    margin-bottom: 2px;
    transition: all .2s;
  }

  &.load .button-component-text {
    visibility: hidden;
    opacity: 0;
  }

  &.load::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(3turn);
    }
  }
}
</style>
