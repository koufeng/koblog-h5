const ar06 = `<h1 id="纯css返回顶部特效">纯CSS“返回顶部”特效</h1>
<blockquote>
<p>原文地址: 《<a href="https://moderncss.dev/pure-css-smooth-scroll-back-to-top/">Pure CSS Smooth-Scroll &quot;Back to Top&quot;</a>》</p>
</blockquote>
<blockquote>
<p>我从事前端开发13年有余，一直致力于研究现代CSS解决方案，这是我该系列文章的第4篇</p>
</blockquote>
<p>&quot;Back to top&quot;链接现在可能不经常使用，但有两个现代CSS技术很好地展示了它的特点。</p>
<ul>
<li><code>position: sticky</code></li>
<li><code>scroll-behavior: smooth</code></li>
</ul>
<p>2011年在<a href="https://web.archive.org/web/20110413163553/https://webdesignerwall.com/tutorials/animated-scroll-to-top">Web Designer Wall</a>利用<code>jQuery</code>实现 &quot;back to top&quot; 效果</p>
<p>它的想法是为用户提供一个 &quot;跳转链接&quot;，让用户可以滚动回到网站的顶部，在以前的博客上经常使用。</p>
<p>下面我们就来学习一下如何实现。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gf1kea82lbg30jz05nu0c.gif" alt="top"></p>
<h2 id="关于-position-sticky">关于 <code>position: sticky</code></h2>
<p>这个新的 <code>position</code>属性值在<a href="https://caniuse.com/#search=position%3A%20sticky">caniuse</a>上描述如下：</p>
<blockquote>
<p>保持元素的<code>position</code>为 &quot;fixed&quot;或 &quot;relative&quot;，这取决于它在视窗中的显示方式,</p>
</blockquote>
<p>在元素滚动时表现为<code>fixed</code></p>
<p><code>caniuse data</code>的另一个重要注意事项是，你需要提供它的前缀以获得最好的支持, 我们在<code>Back to top</code>时不是十分优雅的实现<code>position: fixed</code>的效果</p>
<h2 id="关于-scroll-behavior-smooth">关于 <code>scroll-behavior: smooth</code></h2>
<p>这是一个非常新的属性，并且<a href="https://caniuse.com/#search=scroll-behavior">支持相对较低</a>。这个确切的定义要求滚动行为，特别是在选择锚点链接时，滚动行为会有一个平滑的动画外观，而不是默认的、更突兀的即时跳转。</p>
<p>使用它提供了“渐进式增强”，这意味着对于那些浏览器支持它的人来说，它将是一个更好的体验，但对于不支持它的浏览器来说，它也可以工作。</p>
<p>令人惊讶的是，<code>Safari</code>在支持这一点上落后了，但其他主要的浏览器都支持。</p>
<h2 id="基本-html-结构">基本 html 结构</h2>
<p>html 内容：</p>
<pre><code class="language-html">&lt;header id=&quot;top&quot;&gt;Title&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;!-- long form content here --&gt;
  &lt;/article&gt;
  &lt;!-- Back to Top link --&gt;
  &lt;div class=&quot;back-to-top-wrapper&quot;&gt;
    &lt;a href=&quot;#top&quot; class=&quot;back-to-top-link&quot; aria-label=&quot;Scroll to Top&quot;&gt;🔝&lt;/a&gt;
  &lt;/div&gt;
&lt;/main&gt;</code></pre>
<p>我们把链接(#top)放在<code>article</code>之后，但在<code>main</code>内。它不是具体的<code>article</code>的一部分，我们也希望它在焦点顺序中排在最后。</p>
<p>我们还可以在<code>&lt;header&gt;</code>中添加<code>id=&quot;top&quot;</code>，并使用该锚点作为回顶部链接的<code>href</code>值。如果你只想滚动到<code>&lt;main&gt;</code>的顶部，当然你也可以将这个<code>id</code>放在顶部其他位置</p>
<h2 id="添加-smooth-scrolling">添加 <code>smooth-scrolling</code></h2>
<p>第一步很简单，添加下面的css：</p>
<pre><code class="language-scss">// Smooth scrolling IF user doesn&#39;t have a preference due to motion sensitivities
@media screen and (prefers-reduced-motion: no-preference) {
  html,
  body {
    scroll-behavior: smooth;
  }
}</code></pre>
<p>原来的解决方案没有考虑到<code>prefers-reduced-motion</code>的问题。</p>
<p>之前，我有一篇<code>CSS-Tricks</code>的文章，是用<code>jQuery</code>和<code>vanilla JS</code>完成的。这篇文章已经有一段时间了，感谢那个团队在有新解决方法的时候不断地更新这样的文章👍</p>
<p>我发现了一些奇怪的地方，比如当你访问一个在URL中包含锚点的页面时，它仍然会执行平滑滚动，这对你的场景可能并不可取。</p>
<h2 id="添加锚点back-to-top">添加锚点&quot;Back to Top&quot;</h2>
<p>在实现之前，让我们先给这个链接做一些基本的样式。为了好玩，我用了一个<code>emoji</code>，但你可以换成SVG图标。</p>
<pre><code class="language-scss">.back-to-top-link {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #D6E3F0;
  // emoji don&#39;t behave like regular fonts
  // so this helped position it correctly
  padding: 0.25rem;
}</code></pre>
<p>上面的样式只实现了一个非常基本的圆形按钮。在完整的<code>Codepen</code>中，我添加了额外的更棒样式和 <code>:hover</code> 和 <code>:focus</code> 样式，但这些并不是必要的。</p>
<p>接下来，你可能会想知道为什么我们要为这个锚点外添加一层。原因是我们需要用它来为链接创建一个 &quot;scroll track&quot;。以使链接可以存在于其中。</p>
<p><code>position: sticky</code> 会根据<code>element</code>在<code>dom</code>中的位置呈现<code>position</code>属性，然后会根据元素<code>top</code>的值，展示在窗口中，然而，我们把链接放在文档的最后，所以如果没有一些帮助，它基本上不会被选中。</p>
<p>我们将使用 外层元素<code>.back-to-top-wrapper</code>和 <code>position: absolute</code> 属性来改变<code>link</code>位置 ，值得庆幸的是，浏览器使用此视觉调整后的位置（也就是进入视口时）来计算何时“粘贴”链接。 </p>
<p>外层元素<code>.back-to-top-wrapper</code> 样式</p>
<pre><code class="language-scss">// 滚动条距离&lt;main&gt;多远出现 “link”

$scrollLength: 100vh;

.back-to-top-wrapper {
  // 轨迹
  // outline: 1px solid red;
  position: absolute;
  top: $scrollLength;
  right: 0.25rem;
  bottom: -5em;
  // 需要在不支持 &quot;sticky &quot;的浏览器中获得最佳支持。
  width: 3em;
  // 禁用默认鼠标事件
  pointer-events: none;
}</code></pre>
<p><code>pointer-events: none;</code>这个个定义可能对你来说也很陌生，这本质上是让交互事件，比如点击等交互事件在元素中失效，这样就会阻止一些默认事件发生，比如<code>a</code>标签跳转。</p>
<p>有了这些，我们现在可以看到链接在最初的视口内容下面的内容上有一点重叠。让我们在<code>&lt;main&gt;</code>中添加一些样式来防止这种重叠，并添加<code>position:relative</code>， 这对于外层的元素<code>absolute</code>属性是必须的。</p>
<pre><code class="language-scss">main {
  // 为轨迹留一些空间
  padding: 0 3rem;
  position: relative;
  max-width: 50rem;
  margin: 2rem auto;

  // 可选，如果最后一个元素是块项，则清除margin。 
  *:last-child {
    margin-bottom: 0;
  }
}</code></pre>
<p><code>.back-to-top-link</code> 核心<code>link</code>样式</p>
<pre><code class="language-scss">.back-to-top-link {
  // \`sticky\` 不生效时 \`fixed\` 备选
  position: fixed;
  //  首选position属性，兼容需要前缀支持，在Safari上不支持。
  // @link https://caniuse.com/#search=position%3A%20sticky
  position: sticky;
  // 恢复默认事件
  pointer-events: all;
  // “sticky” 生效时距窗口顶部距离，如果是“fixed”则始终是相对窗口顶部距离
  top: calc(100vh - 5rem);
}</code></pre>
<p>在浏览器支持<code>sticky</code>属性时会出现最理想的效果，否则<code>position: fixed;</code>生效，&quot;Back to Top&quot; 会一直存在窗口中</p>
<p>注意，我们还用<code>pointer-events: all;</code>还原了指针事件，这样，与链接的交互实际上是可以工作的。</p>
<p>codepen：</p>
<p><a href="https://codepen.io/5t3ph/pen/OJyyqWR">https://codepen.io/5t3ph/pen/OJyyqWR</a></p>
<h2 id="已知问题">已知问题</h2>
<p>在有简短内容场景中，会有一些问题，你可能会想利用<code>overflow: hidden</code>属性来解决，但不幸的是，这使得<code>position: sticky</code>无法完全工作☹️，所以在真实的开发中你应该区分出这种情况，或者在模板中注入文章之前执行一个计算来确定文章是否满足长度要求。</p>`

export {ar06}