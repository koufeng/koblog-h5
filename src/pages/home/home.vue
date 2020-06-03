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
            <div class="row bgc mt-5 right-author">
              <div class="col-md-12">
                <div class="auth-img">
                  <img src="images/logo.png" alt />
                </div>
                <div class="auth-name">
                  <span>惜缘</span>
                  <p>一个前端开发</p>
                </div>
                <div class="auth-info">
                  <ul>
                    <li>
                      <strong>2</strong>
                      <span>今日访问量</span>
                    </li>
                    <li>
                      <strong>2</strong>
                      <span>今日访问量</span>
                    </li>
                    <li>
                      <strong>2</strong>
                      <span>今日访问量</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row bgc mt-3">
              <div class="new new-right">
                <span>
                  <i class="el-tags"></i>标签云
                </span>
                <small>New Article</small>
              </div>
              <div class="col-md-12">
                <ul class="label">
                  <li>
                    <a href="#" title="生活">生活&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="模糊查询">模糊查询&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="遍历二维数组">遍历二维数组&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="Mui">Mui&nbsp;&nbsp;(2)</a>
                  </li>

                  <li>
                    <a href="#" title="随机">随机&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="文章月统计">文章月统计&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="时间戳">时间戳&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="一周每天的数据">一周每天的数据&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="无限极分类">无限极分类&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="tp5">tp5&nbsp;&nbsp;(2)</a>
                  </li>

                  <li>
                    <a href="#" title="面试">面试&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="layui">layui&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="Thinkphp5">Thinkphp5&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="QQ互联">QQ互联&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="惜缘">惜缘&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="发斯蒂芬">发斯蒂芬&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="擦擦">擦擦&nbsp;&nbsp;(3)</a>
                  </li>

                  <li>
                    <a href="#" title="发">发&nbsp;&nbsp;(2)</a>
                  </li>

                  <li>
                    <a href="#" title="测试">测试&nbsp;&nbsp;(5)</a>
                  </li>

                  <li>
                    <a href="#" title="fasdfasd">fasdfasd&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="测试数据2">测试数据2&nbsp;&nbsp;(1)</a>
                  </li>

                  <li>
                    <a href="#" title="测试数据">测试数据&nbsp;&nbsp;(2)</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row bgc mt-3">
              <div class="new new-right">
                <span>
                  <i class="el-paper-clip"></i>友情连接
                </span>
                <small>Friend Links</small>
              </div>
              <div class="col-md-12">
                <ul class="links">
                  <li>
                    <a href>百度一下</a>
                  </li>
                  <li>
                    <a href>惜缘个人博客</a>
                  </li>
                  <li>
                    <a href>百度一下</a>
                  </li>
                  <li>
                    <a href>百度一下</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import koBanner from './banner'
// import koBanner from './banner'
export default {
  components: {
    koBanner
  }
};
</script>
<style scoped>

</style>