<template>
  <div class="ko-bg">
    <ko-head></ko-head>
    <div class="ko-con">
      <router-view />
    </div>
    <ko-footer></ko-footer>
  </div>
</template>

<script>
import koHead from './head'
import koFooter from './footer'
export default {
  components: {
    koHead,
    koFooter
  }
}

</script>
<style scoped>
  .ko-bg {
    background: url("../../assets/img/particle-left.png") no-repeat;
    background-position: left top;
  }
</style>