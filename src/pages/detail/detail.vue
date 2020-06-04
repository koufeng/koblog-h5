<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-8">
          <div class="container">
            <div class="row mt-2">
              <div class="col-md-12 bgc">
                <div class="new">
                  <span>最新文章</span>
                  <small>New Article</small>
                </div>
              </div>
            </div>
            <div class="row mt-2 bgc">
              <div class="article-body">
                <div class="markdown-body" v-html="mdText" v-highlight></div>
              </div>
            </div>
          </div>
        </div>
        <!--右边-->
        <div class="col-md-4">
          <div class="container">
            <ko-side></ko-side>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import koSide from '@/pages/side/side.vue'
import { ar01 } from '@/mock/01.js'
export default {
  components: {
    koSide
  },
  computed: {
    mdText () {
      return ar01
    }
  },
};
</script>
<style>
</style>