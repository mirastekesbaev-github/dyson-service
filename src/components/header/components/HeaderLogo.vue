<template>
  <div class="header-logo">
    <a class="header-logo-link" href="https://dyson-service.kz">
      <span v-html="title"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
  data() {
    return {
      title: "Центр <br> технического <br> обслуживания <br> dyson"
    }
  }
}
</script>

<style scoped lang="scss">
.header-logo {
  width: 200px;
  height: auto;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  
  &-link {
    color: black;
    text-decoration: none;
  }
}
</style>