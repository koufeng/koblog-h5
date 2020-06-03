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
import { text } from '@/mock/01.js'
export default {
  computed: {
    mdText () {
      return text
    }
  },
};
</script>
<style>
</style>