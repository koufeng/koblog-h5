const ar05 = `<h1 id="只用css实现响应式full-width-img-2种方法">只用CSS实现响应式Full-Width img 2种方法</h1>
<blockquote>
<p>原文地址: 《<a href="https://moderncss.dev/css-only-full-width-responsive-images-2-ways/">CSS-Only Full-Width Responsive Images 2 Ways</a>》</p>
</blockquote>
<blockquote>
<p>我从事前端开发13年有余，一直致力于研究现代CSS解决方案，这是我该系列文章的第3篇</p>
</blockquote>
<p>以前在<code>jquery</code>流行的时候用于响应式背景图片的最受欢迎的工具是<a href="https://www.jquery-backstretch.com/">Backstretch jQuery</a>插件。</p>
<p>在<code>background-size</code>属性得到广泛支持之前（即IE&lt;9总市场份额下降了）我在大约30个项目中使用了此插件。</p>
<pre><code class="language-css">background-size: cover;</code></pre>
<p>根据<a href="https://caniuse.com/#feat=mdn-css_properties_background-size_contain_and_cover">caniuse.com</a>的说法,虽然这个属性和价值已经支持了9年多了! 但与使用<code>Backstretch</code>或其他方案交织在一起的网站可能还没有更新。</p>
<p>另一种方法是利用标准的<code>img</code>标签，并使用了神奇的属性：</p>
<pre><code class="language-scss">object-fit: cover;</code></pre>
<p>下面我们就来看看每一种方案的使用方法，学习一下什么时候选择哪一个合适。</p>
<h2 id="background-size-cover-方案">background-size: cover 方案</h2>
<p>我十年的工作背景是为企业网站创建高度定制的WordPress主题和插件，所以用模板化的卡片为例，下面是你可能使用的<code>background-size: cover</code>解决方案来设置。</p>
<p>首先是<code>HTML</code>，将图片作为背景插入样式属性中。鼓励用一个<code>ria-label</code>来代替普通<code>img</code>标签上的<code>alt</code>属性。</p>
<pre><code class="language-html">&lt;article class=&quot;card&quot;&gt;
  &lt;div class=&quot;card__img&quot; aria-label=&quot;Preview of Whizzbang Widget&quot; style=&quot;background-image: url(https://placeimg.com/320/240/tech)&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;card__content&quot;&gt;
    &lt;h3&gt;Whizzbang Widget SuperDeluxe&lt;/h3&gt;
    &lt;p&gt;
      Liquorice candy macaroon soufflé jelly cake. Candy canes ice cream
      biscuit marzipan. Macaroon pie sesame snaps jelly-o.
    &lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;button&quot;&gt;Add to Cart&lt;/a&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
<p>对应<code>CSS</code>如下, 其中<code>padding-bottom</code>是一个特殊的技巧，使<code>div</code>背景图片保持16:9的比例。</p>
<pre><code class="language-scss">.card__img {
  background-size: cover;
  background-position: center;
  // 16:9 ratio
  padding-bottom: 62.5%;
}</code></pre>
<p><code>codepen</code>示例：</p>
<p><a href="https://codepen.io/5t3ph/pen/VwvvVeo">https://codepen.io/5t3ph/pen/VwvvVeo</a></p>
<h2 id="object-fit-cover-方案">object-fit: cover 方案</h2>
<p>根据<a href="https://caniuse.com/#search=object-fit">caniuse data</a>的数据，没有<code>polyfill</code>的情况下，不支持IE浏览器。</p>
<p>这个样式是直接放在<code>img</code>标签上的，所以我们把我们的<code>HTML</code>更新为如下，把 <code>aria-label</code> 换成 <code>alt</code>。</p>
<pre><code class="language-html">&lt;article class=&quot;card&quot;&gt;
  &lt;img class=&quot;card__img&quot; alt=&quot;Preview of Whizzbang Widget&quot; src=&quot;https://placeimg.com/320/240/tech&quot;/&gt;
  &lt;div class=&quot;card__content&quot;&gt;
    &lt;h3&gt;Whizzbang Widget SuperDeluxe&lt;/h3&gt;
    &lt;p&gt;
      Liquorice candy macaroon soufflé jelly cake. Candy canes ice cream
      biscuit marzipan. Macaroon pie sesame snaps jelly-o.
    &lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;button&quot;&gt;Add to Cart&lt;/a&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
<p>然后我们更新css样式使用<code>height</code>属性来约束图像，以便任何尺寸的图像都符合约束比例。如果图像的固有尺寸大于约束的图像尺寸，那么 <code>object-fit</code>属性就会接管,默认情况下，img会在<code>card</code>+ 高度定义所创建的范围内居中。</p>
<pre><code class="language-css">.card__img {
  object-fit: cover;
  height: 30vh;
}</code></pre>
<p>codepen:</p>
<p><a href="https://codepen.io/5t3ph/pen/VwvvVqa">https://codepen.io/5t3ph/pen/VwvvVqa</a></p>
<h2 id="什么时候选择哪一个合适">什么时候选择哪一个合适</h2>
<p>如果你必须支持老版本的<code>IE</code>，那么在没有<code>polyfill</code>的情况下，你只能采用<code>background-size</code>这种解决方案。</p>
<p>这两种方案都可以根据你控制宽高比来实现<code>Full-Width</code>响应式图片。</p>
<p>如果你选择<code>background-size</code>这种方式：</p>
<ul>
<li><p>应用于包含额外内容的容器（例如网站<code>header</code>背景）</p>
</li>
<li><p>应用于伪元素样式中，<code>img</code>标签不可用时</p>
</li>
<li><p>更加优雅地应用统一的图像尺寸</p>
</li>
<li><p>纯粹是装饰性的图像，不需要固有的<code>img</code>语义。</p>
</li>
</ul>
<p>选择 <code>object-fit</code>方式:</p>
<ul>
<li>为了保持图像提供的所有语义，使用标准的img对你的上下文来说是最好的。</li>
</ul>`

export {ar05}