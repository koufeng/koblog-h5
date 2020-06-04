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
                <div class="markdown-body" v-html="curArt" v-highlight></div>
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
import { articleData } from '@/mock/articleData.js'
export default {
  data() {
    return {
      curArt: '',
      curID: ''
    }
  },
  components: {
    koSide
  },
  computed: {
    // listData () {
    //   return articleData
    // }
  },
  created () {
    this.getCurArt()
  },
  methods: {
    getCurArt () {
      let params = this.$route.query
      if (params) {
        this.curID = params.id
        for (let i = 0; i < articleData.length; i++) {
          if (articleData[i]['id'] === this.curID) {
            this.curArt = articleData[i]['article']
            break;
          }
        }
      }
    }
  }
};
</script>
<style>
</style>