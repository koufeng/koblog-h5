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
                <li class="media" @click="$router.push(`/detail`)">
                  <div class="art-img">
                    <img class="mr-3" src="images/8.jpg" alt="Generic placeholder image" />
                  </div>
                  <div class="media-body art-content">
                    <h5 class="mt-0 mb-1">
                      <a href="./article.html">js前端实现模糊查询</a>
                    </h5>
                    <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端，由后端来做。但是有时候一些轻量级的列表前端来做可以减少ajax请求，在一定程度上提高用户体验。废话不多...</p>
                    <ul>
                      <li>
                        <a title="惜缘2019-04-03发表">
                          <i class="el-time"></i>2019-04-03
                        </a>
                      </li>
                      <li class="d-none d-sm-none d-md-none d-lg-block">
                        <a href="./article.html" title="作者： 惜缘">
                          <i class="el-user"></i>惜缘
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
                        <a href="./article.html" title="查看分类">
                          <i class="el-th-list"></i>生活
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="media">
                  <div class="art-img">
                    <img class="mr-3" src="images/7.jpg" alt="Generic placeholder image" />
                  </div>
                  <div class="media-body art-content">
                    <h5 class="mt-0 mb-1">
                      <a href="./article.html">js前端实现模糊查询</a>
                    </h5>
                    <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端，由后端来做。但是有时候一些轻量级的列表前端来做可以减少ajax请求，在一定程度上提高用户体验。废话不多...</p>
                    <ul>
                      <li>
                        <a title="惜缘2019-04-03发表">
                          <i class="el-time"></i>2019-04-03
                        </a>
                      </li>
                      <li class="d-none d-sm-none d-md-none d-lg-block">
                        <a href="/index/about/index.html" title="作者： 惜缘">
                          <i class="el-user"></i>惜缘
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
                        <a href="/index/article/index/id/32.html" title="查看分类">
                          <i class="el-th-list"></i>生活
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
export default {
  components: {
    koBanner,
    koSide
  }
};
</script>
<style scoped>

</style>