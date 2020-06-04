const ar04 = `<h1 id="实现元素等高-flexbox-vs-grid">实现元素等高: Flexbox vs. Grid</h1>
<blockquote>
<p>原文地址: 《<a href="https://moderncss.dev/equal-height-elements-flexbox-vs-grid/">Equal Height Elements: Flexbox vs. Grid</a>》</p>
</blockquote>
<blockquote>
<p>我从事前端开发13年有余，一直致力于研究现代CSS解决方案，这是我该系列文章的第2篇</p>
</blockquote>
<p>很久以前（大约7年前），我写了一个jQuery插件来计算等高列的效果。它确保了在一个非常特殊的情况下，无论内容的长度如何，都能保持内容框的高度相等。当时浮动的布局方式并没有解决这个问题</p>
<h2 id="flexbox-解决方案">Flexbox 解决方案</h2>
<p>当 <code>flexbox</code> 出现时就会实现这种效果</p>
<pre><code class="language-scss">.flexbox {
  display: flex;
}</code></pre>
<p>在默认情况下，子元素在同一排中会有<code>stretch</code>(默认)属性，会自动实现等高的效果。</p>
<p>但是如果添加两个<code>.column div</code> 子元素就会失去等高的效果</p>
<p>修改方案：</p>
<pre><code class="language-scss">.flexbox {
  display: flex;

  // 确保内容元素填满.column
  .element {
    height: 100%;
  }
}</code></pre>
<p>这样就会实现和上面同样的效果，并且随着<code>.element</code> 内容增涨而拉伸。</p>
<p>Grid 解决方案</p>
<p><code>Grid</code>拥有类似的样式</p>
<pre><code class="language-scss">.grid {
  display: grid;
  // 切换默认的轴默认属性
  grid-auto-flow: column;
}</code></pre>
<p>与<code>flexbox</code>相似,子元素会自动为等高的效果，同样子元素也需要定义高度，像<code>flexbox</code>一样</p>
<pre><code class="language-scss">.grid {
  display: grid;
  grid-auto-flow: column;

  // 确保内容元素填满.column
  .element {
    height: 100%;
  }
}</code></pre>
<p><code>codepen</code> 示例:</p>
<p><a href="https://codepen.io/5t3ph/pen/BaoamwO">https://codepen.io/5t3ph/pen/BaoamwO</a></p>
<h2 id="哪种方案更好">哪种方案更好</h2>
<p><code>flexbox</code>的优势在于默认的样式即可实现等高的效果，而<code>grid</code>则需要显式设置。但是，元素本身并不是等宽的（这可能是一个优势，取决于内容的类型，例如导航链接）。</p>
<p><code>grid</code>的优点在于天生具有等宽的样式，如果你想这样实现的话，另外一个优势是当你不想要<code>auto-flow</code>时
而是设置每一行的具体列数，<code>grid</code>可以轻松的做到。</p>
<p>更新我们<code>grid</code>方案，以处理定义每行最多3列的问题，简单如下：</p>
<pre><code class="language-scss">&amp;.col-3 {
  grid-gap: $col_gap;
  grid-template-columns: repeat(3, 1fr);
}</code></pre>
<p><code>flexbox</code>方案：</p>
<pre><code class="language-scss">$col_gap: 1rem;

.flexbox.col-3 {
  // 需要定义 wrap 属性
  // 超出到下一行
  flex-wrap: wrap;

  .column {
    // &quot;hack&quot; for 元素间隙
    margin: $col_gap/2;
    // 计算宽度
    max-width: calc((100% / 3) - #{$col_gap});
  }
}</code></pre>
<p>您还需要考虑如何以响应方式处理这些解决方案，但这有点超出本文的范围：)</p>`

export {ar04}