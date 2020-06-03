<template>
  <div>
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
<style>
</style>