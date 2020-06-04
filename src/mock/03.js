const ar03 = `<h1 id="将footer固定在底部-flexbox-vs-grid">将footer固定在底部: Flexbox vs Grid</h1>
<blockquote>
<p>原文地址: 《<a href="https://moderncss.dev/keep-the-footer-at-the-bottom-flexbox-vs-grid/">Keep the Footer at the Bottom: Flexbox vs. Grid</a>》</p>
</blockquote>
<blockquote>
<p>我从事前端开发13年有余，一直致力于研究现代CSS解决方案，这是我该系列文章的第1篇</p>
</blockquote>
<p>多年来，我不断地参考 Matthew James Taylor 的这篇<a href="https://matthewjamestaylor.com/bottom-footer">文章</a>，寻找一种方法，无论页面内容的长度如何，都能让网页<code>footer</code>保持在页面底部。这个方法依赖于设置一个footer高度，虽然不能扩展，但在 BF（Flexbox之前）是一个非常好的解决方案。</p>
<p>如果你主要处理SPA(单页面应用)开发，你可能会依然被这个问题困扰，你所开发的页面底部可能会漂起来，存在于：</p>
<ul>
<li>登录页</li>
<li>博客/新闻文章（无广告...）</li>
<li>中间页面 例如确认弹层</li>
<li>产品列表</li>
<li>日历详情</li>
</ul>
<p>现代CSS有两种处理方法：<code>flexbox</code>和 <code>grid</code>。</p>
<p>下面是两种方法的 <code>demo</code>, 默认为<code>flexbox</code>的方法。
也可以把<code>$method</code>变量换成<code>grid</code>, 在<code>Codepen</code>中查看完整的示例</p>
<p>codePen:</p>
<p><a href="https://codepen.io/5t3ph/pen/abvboxz">https://codepen.io/5t3ph/pen/abvboxz</a></p>
<h2 id="flexbox-方法">Flexbox 方法</h2>
<p>通过以下方式实现</p>
<pre><code class="language-scss">body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

// Optional
main {
  margin: 0 auto;
  // or: align-self: center
  max-width: 80ch;
}</code></pre>
<h3 id="如何实现">如何实现</h3>
<p>首先，我们确保<code>body</code>元素将至少拉伸到屏幕的全部高度，<code>min-height: 100vh</code>,如果内容很短，这将不会触发溢出（例外：某些手机浏览器），它将允许内容根据需要继续拉伸高度。</p>
<p>通过设置 <code>flex-direction: column</code>保留块元素,（假定<code>body</code>子元素实际上都是块元素）来保持正常文档流的行为。</p>
<p><code>flexbox</code>的优势在于利用<code>margin: auto</code>填充它在相应方向上最近的同级中的空间,设置<code>margin-top: auto</code>有效地将<code>footer</code>推到屏幕的底部。</p>
<h3 id="gotcha">Gotcha</h3>
<p>在<code>flexbox</code>方法中，我在<code>main</code>上添加了一个<code>outline</code>，<code>main</code>元素未填充高度，这就是为什么我们必须使用margin-top: auto技巧。这可能对你来说并不重要，但如果有的话，请看<code>grid</code>方法，它可以拉伸<code>main</code>来填充可用的空间。</p>
<h2 id="grid-方法">Grid 方法</h2>
<p>通过以下方式实现</p>
<pre><code class="language-scss">body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

// Optional
main {
  margin: 0 auto;
  max-width: 80ch;
}</code></pre>
<h3 id="如何实现-1">如何实现</h3>
<p>我们保留 <code>min-height: 100vh</code>这个方法，后面我们使用
<code>grid-template-rows</code>来划分空间。</p>
<p>我们使用特殊<code>grid</code>单位<code>fr</code>，<code>fr</code> 是一个‘分数’，它是浏览器计算出可分配给该列或该行的可用空间的大小，这样它可以自动填充<code>head</code>和<code>footer</code>之间的所有可用空间，这也就解决了flexbox方法中的问题。</p>
<h2 id="哪一个更好">哪一个更好</h2>
<p>在看到<code>grid</code>之后，你可能会有一瞬间的想法，觉得它显然更有优势。然而，如果在<code>head</code>和<code>footer</code>之间添加了更多元素，则需要更新模板(或者确保始终存在包装元素（如div）以不影响任何嵌套语义/层次结构)</p>
<p>另一方面，<code>flexbox</code>方法可以在不同的模板中使用，在中间部分有多个块元素的情况下，例如，在存档页中使用一系列的<code>&lt;article&gt;</code>元素，而不是单一的<code>&lt;main&gt;</code>。</p>
<p>所以，就像所有的技术一样，这取决于项目的不同：)</p>`

export {ar03}
