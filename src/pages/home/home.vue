<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-8">
          <div class="container">
            <!-- <ko-head></ko-head> -->
            <ko-banner></ko-banner>
            <div class="row mt-2 wow fadeInDown">
              <div class="col-md-12 bgc">
                <div class="new">
                  <span>
                    <i class="el-certificate"></i>
                  </span>
                  <span>最新文章</span>
                  <small>New Article</small>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <ul class="list-unstyled art-list">
                <li v-for="(item, index) in listData" :key="index" class="media" @click="$router.push(`/detail?id=${item.id}`)">
                  <div class="art-img">
                    <div class="art-img-box flex ai-center jc-center" style="background: #3299BB;">
                      <h3>{{item.category}}</h3>
                    </div>
                  </div>
                  <div class="media-body art-content">
                    <h5 class="mt-0 mb-1">
                      <a>{{item.title}}</a>
                    </h5>
                    <p>{{item.introduction}}...</p>
                    <ul>
                      <li>
                        <a title="">
                          <i class="el-time"></i>{{item.creationTime}}
                        </a>
                      </li>
                      <li class="d-none d-sm-none d-md-none d-lg-block">
                        <a>
                          {{item.author}}
                        </a>
                      </li>
                      <li>
                        <a title="已有 2 个赞">
                          <i class="el-heart"></i>2
                        </a>
                      </li>
                      <li>
                        <a title="已有 1次浏览">
                          <i class="el-eye-open"></i>1
                        </a>
                      </li>
                      <li class="d-none d-sm-none d-md-none d-lg-block">
                        <a title="分类">
                          <i class="el-th-list"></i>{{item.category}}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
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
import koBanner from './banner'
import koSide from '@/pages/side/side.vue'
import { articleData } from '@/mock/articleData.js'

export default {
  components: {
    koBanner,
    koSide
  },
  computed: {
    listData () {
      return articleData
    }
  },
};
</script>
<style scoped>
.art-img-box {
  height: 100%;
  color: #fff;
}
</style>