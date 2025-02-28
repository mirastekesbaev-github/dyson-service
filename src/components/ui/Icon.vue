<template>
  <svg class="icon" :class="iconClass" :style="{width: iconSize, height: iconSize, color}">
    <use v-if="icon === 'phone'" href="../../assets/icons/sprite.svg#phone"></use>
    <use v-if="icon === 'instagram'" href="../../assets/icons/sprite.svg#instagram"></use>
    <use v-if="icon === 'whatsapp'" href="../../assets/icons/sprite.svg#whatsapp"></use>
    <use v-if="icon === 'telegram'" href="../../assets/icons/sprite.svg#telegram"></use>
  </svg>
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
}
</style>