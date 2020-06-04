const ar02 = `<h1 id="从-node-到-deno">从 Node 到 Deno</h1>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gexm53yyjqj30qn0c0q4e.jpg" alt="从 Node 到 Deno"></p>
<blockquote>
<p>原文地址: 《<a href="https://aralroca.com/blog/from-node-to-deno">From Node to Deno</a>》</p>
</blockquote>
<p>上周我发表了一篇关于 Deno 的文章: <a href="https://aralroca.com/blog/learn-deno-chat-app">如何用 Deno 和 Preact 创建一个聊天应用</a>。很多疑问接踵而至。期中大部分都是如何用 Done 来做 Node 之前所做的事情。</p>
<p>所以我尝试整理一些 Node 常见问题的 Deno 替代方案。这非必要，很多模块可以重用。可以访问 <a href="https://www.pika.dev/about">pika.dev</a>来寻找在 Deno 中使用的模块。</p>
<p>收集列表如何下：</p>
<ul>
<li>Electron</li>
<li>Forever / PM2</li>
<li>Express / Koa</li>
<li>MongoDB</li>
<li>PostgresSQL</li>
<li>MySQL / MariaDB</li>
<li>Redis</li>
<li>Nodemon</li>
<li>Jest, Jasmine, Ava...</li>
<li>Webpack, Parcel, Rollup...</li>
<li>Prettier</li>
<li>NPM Scripts</li>
<li>Nvm</li>
<li>Npx</li>
<li>Run on a Docker</li>
<li>Run as a lambda</li>
<li>Conclusion</li>
</ul>
<h2 id="electron">Electron</h2>
<p>Electron 使用 <code>Chromium</code> 作为界面来运行 Web 环境。可以通过 <code>Node.js + Electron</code> 创建桌面应用程序。Deno 替代方案么？</p>
<p><img src="https://aralroca.com/images/blog-images/55.png" alt="Electron"></p>
<p>现在Electron还远远不能在Deno下运行。我们必须寻找替代方案。因为Deno是用Rust制作的，所以我们可以使用 <a href="https://github.com/Boscop/web-view">web-view rust bindings</a> 来运行桌面应用。</p>
<p>这样一来，我们可以使用原生操作系统的webview来运行我们想要的webview。</p>
<p>回购：<a href="https://github.com/eliassjogreen/deno_webview">https://github.com/eliassjogreen/deno_webview</a></p>
<pre><code class="language-typescript">import { WebView } from &quot;https://deno.land/x/webview/mod.ts&quot;;

const sharedOptions = {
  width: 400,
  height: 200,
  resizable: true,
  debug: true,
  frameless: false,
};

const webview1 = new WebView({
  title: &quot;Multiple deno_webview example&quot;,
  url: \`data:text/html,
    &lt;html&gt;
    &lt;body&gt;
      &lt;h1&gt;1&lt;/h1&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    \`,
  ...sharedOptions,
});

const webview2 = new WebView({
  title: &quot;Multiple deno_webview example&quot;,
  url: \`data:text/html,
    &lt;html&gt;
    &lt;body&gt;
      &lt;h1&gt;2&lt;/h1&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    \`,
  ...sharedOptions,
});

await Promise.all([webview1.run(), webview2.run()]);</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gexmx17u6jj30m80eugm6.jpg" alt="webview"></p>
<h2 id="forever--pm2">Forever / PM2</h2>
<p><a href="https://github.com/foreversd/forever">Forever</a> 和 <a href="https://github.com/Unitech/pm2">PM2</a> 是CLI工具，用于确保给定脚本作为守护进程连续运行。与Forever不同的是，PM2的功能更完善，同时还可以作为负载均衡。这两个工具在Node中都非常有用，但是在Deno中可以使用吗？</p>
<p><code>Forever</code>只适用于Node，所以使用它是不可行的。另一方面，用PM2我们可以运行非Node脚本，所以我们还是可以在Deno中使用它。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1geyzx0tohgj305k01kwea.jpg" alt="pm2"></p>
<p>创建一个<code>app.sh</code>文件</p>
<pre><code class="language-bash">#!/bin/bash
deno run -A myCode.ts</code></pre>
<p>和</p>
<pre><code class="language-bash"> pm2 start ./app.sh</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gexn4dvlfuj30j60700sx.jpg" alt="pm2"></p>
<h2 id="express--koa">Express / Koa</h2>
<p><a href="https://github.com/expressjs/express">Express</a> 和 <a href="https://github.com/koajs/koa">Koa</a> 是最著名的Node框架。它们以其强大的路由系统和HTTP助手（重定向、缓存等）而闻名。我们可以在Deno中使用它们吗？答案是不能.....。但也有一些替代方案。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1geyzy0tmdjj308c047aa2.jpg" alt="Express / Koa"></p>
<h2 id="http（标准库）">Http（标准库）</h2>
<p>Deno自己的STD库已经涵盖了<code>Express</code>或<code>Koa</code>功能。<a href="https://deno.land/std/http/">https://deno.land/std/http/</a>。</p>
<pre><code class="language-typescript">import { ServerRequest } from &quot;https://deno.land/std/http/server.ts&quot;;
import { getCookies } from &quot;https://deno.land/std/http/cookie.ts&quot;;

let request = new ServerRequest();
request.headers = new Headers();
request.headers.set(&quot;Cookie&quot;, &quot;full=of; tasty=chocolate&quot;);

const cookies = getCookies(request);
console.log(&quot;cookies:&quot;, cookies);</code></pre>
<p>但是，STD库的方式并不是很吸引人。所以，我们再来看看一些备选方案。</p>
<h2 id="oak-第三方库">Oak (第三方库)</h2>
<p>受Koa启发，这是目前最优雅的解决方案之一。<a href="https://github.com/oakserver/oak">https://github.com/oakserver/oak</a></p>
<pre><code class="language-typescript">import { Application,  } from &quot;https://deno.land/x/oak/mod.ts&quot;;

const app = new Application();

app.use((ctx) =&gt; {
  ctx.response.body = &quot;Hello World!&quot;;
});

await app.listen({ port: 8000 });</code></pre>
<h2 id="abc-第三方库">Abc (第三方库)</h2>
<p>类似于 <code>Oak</code>。<a href="https://deno.land/x/abc">https://deno.land/x/abc</a>。</p>
<pre><code class="language-typescript">import { Application } from &quot;https://deno.land/x/abc/mod.ts&quot;;

const app = new Application();

app.static(&quot;/static&quot;, &quot;assets&quot;);

app.get(&quot;/hello&quot;, (c) =&gt; &quot;Hello!&quot;)
  .start({ port: 8080 });</code></pre>
<h2 id="deno-express（第三方lib）">Deno-Express（第三方lib）</h2>
<p>也许是最类似于Express Framework的替代品，<a href="https://github.com/NMathar/deno-express">https://github.com/NMathar/deno-express</a>。</p>
<pre><code class="language-typescript">import * as exp from &quot;https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts&quot;;

const port = 3000;
const app = new exp.App();

app.use(exp.static_(&quot;./public&quot;));
app.use(exp.bodyParser.json());

app.get(&quot;/api/todos&quot;, async (req, res) =&gt; {
  await res.json([{ name: &quot;Buy some milk&quot; }]);
});

const server = await app.listen(port);
console.log(\`app listening on port \${server.port}\`);</code></pre>
<h2 id="mongodb">MongoDB</h2>
<p><a href="https://github.com/mongodb/mongo">MongoDB</a> 是一个文档数据库，具有巨大的可扩展性和灵活性。在JavaScript生态系统中已经被广泛使用，有很多像<code>MEAN</code>或<code>MERN</code>这样的堆栈都在使用它。它是非常受欢迎的。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gez0s1scqej30b4030jre.jpg" alt="MongoDB"></p>
<p>我们可以使用MongoDB与Deno。我们可以使用这个模块：<a href="https://github.com/manyuanrong/deno_mongo">https://github.com/manyuanrong/deno_mongo</a>。</p>
<pre><code class="language-typescript">import { init, MongoClient } from &quot;https://deno.land/x/mongo@v0.6.0/mod.ts&quot;;

// Initialize the plugin
await init();

const client = new MongoClient();
client.connectWithUri(&quot;mongodb://localhost:27017&quot;);

const db = client.database(&quot;test&quot;);
const users = db.collection(&quot;users&quot;);

// insert
const insertId = await users.insertOne({
  username: &quot;user1&quot;,
  password: &quot;pass1&quot;
});

// findOne
const user1 = await users.findOne({ _id: insertId });

// find
const users = await users.find({ username: { $ne: null } });

// aggregation
const docs = await users.aggregation([
  { $match: { username: &quot;many&quot; } },
  { $group: { _id: &quot;$username&quot;, total: { $sum: 1 } } }
]);

// updateOne
const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
  username: { $ne: null },
  { $set: { username: &quot;USERNAME&quot; } }
);

// deleteOne
const deleteCount = await users.deleteOne({ _id: insertId });</code></pre>
<h2 id="postgressql">PostgresSQL</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gez0ufgdaqj304604baa2.jpg" alt="PostgresSQL"></p>
<p>与MongoDB一样，<a href="https://github.com/postgres/postgres/">PostgresSQL</a> 也有一个库。<a href="https://github.com/buildondata/deno-postgres%E3%80%82">https://github.com/buildondata/deno-postgres。</a></p>
<pre><code class="language-typescript">import { Client } from &quot;https://deno.land/x/postgres/mod.ts&quot;;

const client = new Client({
  user: &quot;user&quot;,
  database: &quot;test&quot;,
  hostname: &quot;localhost&quot;,
  port: 5432
});
await client.connect();
const result = await client.query(&quot;SELECT * FROM people;&quot;);
console.log(result.rows);
await client.end();</code></pre>
<h2 id="mysql--mariadb">MySQL / MariaDB</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gez0uug6xbj306403hglo.jpg" alt="MySQL / MariaDB"></p>
<p>与<code>MongoDB</code>和<code>PostgresSQL</code>一样，还有<a href="https://github.com/mysqljs/mysql">MySQL</a>/<a href="https://github.com/mariadb-corporation/mariadb-connector-nodejs">MariaDB</a>的库。<a href="https://github.com/manyuanrong/deno_mysql">https://github.com/manyuanrong/deno_mysql</a></p>
<pre><code class="language-typescript">import { Client } from &quot;https://deno.land/x/mysql/mod.ts&quot;;

const client = await new Client().connect({
  hostname: &quot;127.0.0.1&quot;,
  username: &quot;root&quot;,
  db: &quot;dbname&quot;,
  poolSize: 3, // connection limit
  password: &quot;password&quot;,
});

let result = await client.execute(\`INSERT INTO users(name) values(?)\`, [
  &quot;aralroca&quot;,
]);
console.log(result);
// { affectedRows: 1, lastInsertId: 1 }</code></pre>
<h2 id="redis">Redis</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gez0vhsz3hj304603lq2v.jpg" alt="Redis"></p>
<p><a href="https://github.com/NodeRedis/node-redis">Redis</a> 是最著名的缓存数据库，也有Deno的库.<a href="https://github.com/keroxp/deno-redis">https://github.com/keroxp/deno-redis</a></p>
<pre><code class="language-typescript">import { connect } from &quot;https://denopkg.com/keroxp/deno-redis/mod.ts&quot;;

const redis = await connect({
  hostname: &quot;127.0.0.1&quot;,
  port: 6379
});
const ok = await redis.set(&quot;example&quot;, &quot;this is an example&quot;);
const example = await redis.get(&quot;example&quot;);</code></pre>
<h2 id="nodemon">Nodemon</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gez0wa67d9j303c03tmx0.jpg" alt="Nodemon"></p>
<p><a href="https://github.com/remy/nodemon">Nodemon</a> 开发环境中用于监控你的文件的任何变化，自动重启服务器。这使<code>node</code>开发更加有趣，无需手动停止并重启服务器来查看应用的变化。它可以在Deno中使用吗？</p>
<p>抱歉，您不能...但是仍然有另一种选择：Denon。+</p>
<p><a href="https://github.com/eliassjogreen/denon">https://github.com/eliassjogreen/denon</a></p>
<p>我们可以像<code>deno run</code>执行脚本一样使用<code>Denon</code>。</p>
<pre><code class="language-bash">➜ denon server.ts</code></pre>
<h2 id="jest-jasmine-ava">Jest, Jasmine, Ava...</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gexswm785fj30dw05kwep.jpg" alt=""></p>
<p>在<code>Node.js</code>的生态系统中，有很多替代性的测试方法。然而，目前还没有一种官方正式的方法来测试<code>Node.js</code>代码。</p>
<p>在Deno中，有一种官方方法，您可以使用测试<code>std</code>库。</p>
<p><a href="https://deno.land/std/testing">https://deno.land/std/testing</a></p>
<pre><code class="language-typescript">import { assertStrictEq } from &#39;https://deno.land/std/testing/asserts.ts&#39;

Deno.test(&#39;My first test&#39;, async () =&gt; {
  assertStrictEq(true, false)
})</code></pre>
<p>运行测试：</p>
<pre><code class="language-bash">➜  deno test</code></pre>
<h2 id="webpack-parcel-rollup">Webpack, Parcel, Rollup...</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gexsz3vhemj30cf04u74e.jpg" alt="Webpack, Parcel, Rollup"></p>
<p>Deno的优势之一是我们可以将<code>ESmodules</code>与<code>TypeScript</code>一起使用，而无需诸如<a href="https://github.com/webpack/webpack">Webpack</a>，<a href="https://github.com/parcel-bundler/parcel">Parcel</a>或<a href="https://github.com/rollup/rollup">Rollup</a>之类的工具。</p>
<p>然而，可能你会想，如果给定一个文件的树，我们是否可以打一个js包，把所有的东西都放在一个文件里，让它在web运行。</p>
<p>完全可以。我们可以通过Deno的CLI来实现。因此，不需要第三方的打包工具。</p>
<pre><code class="language-bash">➜ deno bundle myLib.ts myLib.bundle.js</code></pre>
<p>现在可以将其加载到浏览器中了：</p>
<pre><code class="language-html">&lt;script type=&quot;module&quot;&gt;
  import * as myLib from &quot;myLib.bundle.js&quot;;
&lt;/script&gt;</code></pre>
<h2 id="prettier">Prettier</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gext2kv18hj3046046dfm.jpg" alt="Prettier"></p>
<p>在过去的几年中，<a href="https://prettier.io/">Prettier</a>在 JavaScript 生态系统中已广为人知，因为有了它，您不必担心格式化文件。</p>
<p>事实是，它仍然可以在Deno上使用，但是失去了意义，因为Deno有自己的格式化程序。</p>
<p>您可以使用以下命令格式化文件：</p>
<pre><code class="language-bash">➜  deno fmt</code></pre>
<h2 id="npm-scripts">NPM Scripts</h2>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gext47qcsmj305k00wt8h.jpg" alt="NPM Scripts"></p>
<p>使用Deno，<code>package.json</code>已经不存在了。我非常怀念的一件事就是在<code>package.json</code>中声明的脚本。</p>
<p>一个简单的解决办法是使用<code>makefile</code>，用<code>make</code>执行。但是，如果你怀念npm语法，有一个npm风格的脚本运行器，用于Deno。</p>
<p><a href="https://github.com/umbopepato/velociraptor">https://github.com/umbopepato/velociraptor</a></p>
<p>您可以使用脚本定义文件：</p>
<pre><code class="language-yaml"># scripts.yaml
scripts:
  start: deno run --allow-net server.ts
  test: deno test --allow-net server_test.ts</code></pre>
<p>执行：</p>
<pre><code class="language-bash">➜  vr run &lt;SCRIPT&gt;</code></pre>
<p>另一个替代品是<a href="https://github.com/BentoumiTech/denox">denox</a>，与<code>Velociraptor</code>非常相似。</p>
<h2 id="nvm">Nvm</h2>
<p><img src="https://aralroca.com/images/blog-images/51.png" alt="Nvm"></p>
<p><a href="https://github.com/nvm-sh/nvm">Nvm</a>是一个<code>CLI</code>，用于管理多个活动的Node版本，根据项目的不同，轻松升级或降级版本。</p>
<p>在Deno中，<code>dvm</code>相当于<code>nvm</code>。</p>
<p><a href="https://github.com/axetroy/dvm">https://github.com/axetroy/dvm</a></p>
<pre><code class="language-bash">➜  dvm use 1.0.0</code></pre>
<h2 id="npx">Npx</h2>
<p><a href="https://github.com/npm/npx">NPX</a>在近几年非常流行，可以不用安装就可以执行npm包。现在很多项目都不会在npm中存在，因为Deno是一个独立的生态系统。那么，我们如何用 <code>deno install https://url-of-module.ts</code>，不用安装就能执行Deno模块呢？</p>
<p>就像我们运行项目一样，我们在运行项目时，我们把模块的<code>URL</code>代替了文件。</p>
<pre><code class="language-bash">➜  deno run https://deno.land/std/examples/welcome.ts</code></pre>
<p>如你所见，不仅我们必须记住模块的名称，而且还要记住整个URL，这使它的使用更加困难。另一方面，它提供了更大的灵活性，因为我们可以运行任何文件，而不仅仅是像npx这样在<code>package.json</code>中指定的二进制文件。</p>
<h2 id="在docker上运行">在Docker上运行</h2>
<p><img src="https://aralroca.com/images/blog-images/53.png" alt="Docker"></p>
<p>要在<code>Docker</code>内部运行Deno，我们可以创建以下<code>Dockerfile</code>：</p>
<pre><code class="language-bash">FROM hayd/alpine-deno:1.0.0

EXPOSE 1993  # Port.

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts # Cache the deps

ADD . .
RUN deno cache main.ts # main entrypoint.

CMD [&quot;--allow-net&quot;, &quot;main.ts&quot;]</code></pre>
<p>要构建并运行它：</p>
<pre><code class="language-bash">➜  docker build -t app . &amp;&amp; docker run -it --init -p 1993:1993 app</code></pre>
<p>Repo: <a href="https://github.com/hayd/deno-docker">https://github.com/hayd/deno-docker</a></p>
<h2 id="run-as-a-lambda">Run as a lambda</h2>
<p><img src="https://aralroca.com/images/blog-images/54.png" alt="lambda"></p>
<p>要将Deno作为<code>lambda</code>，需要<code>Deno STD</code>库中有一个模块。<a href="https://deno.land/x/lambda">https://deno.land/x/lambda</a>。</p>
<pre><code class="language-typescript">import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context
} from &quot;https://deno.land/x/lambda/mod.ts&quot;;

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise&lt;APIGatewayProxyResult&gt; {
  return {
    body: \`Welcome to deno \${Deno.version.deno} 🦕\`,
    headers: { &quot;content-type&quot;: &quot;text/html;charset=utf8&quot; },
    statusCode: 200
  };
}</code></pre>
<p>参考</p>
<ul>
<li><code>Vercel</code>中的Deno：<a href="https://github.com/lucacasonato/now-deno">https://github.com/lucacasonato/now-deno</a></li>
<li><code>AWS</code>中的Deno：<a href="https://blog.begin.com/deno-runtime-support-for-architect-805fcbaa82c3">https://blog.begin.com/deno-runtime-support-for-architect-805fcbaa82c3</a></li>
</ul>
<h2 id="小结">小结</h2>
<p>我肯定我会忘记了一些Node主题以及它们的Deno替代方案，如果有什么遗漏的地方需要我解释，请告诉我。希望这篇文章能帮助你打破Deno的僵局。</p>
<p>要探索你可以使用Deno的所有库。</p>
<ul>
<li><a href="https://deno.land/std">https://deno.land/std</a></li>
<li><a href="https://deno.land/x">https://deno.land/x</a></li>
<li><a href="https://www.pika.dev/">https://www.pika.dev/</a></li>
</ul>`

export {ar02}
