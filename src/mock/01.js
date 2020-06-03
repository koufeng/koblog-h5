const text = `<h1 id="deno-入门手册：附-typescript-代码实例">Deno 入门手册：附 TypeScript 代码实例</h1>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gert1lb5f4j31be0p4my8.jpg" alt="Deno"></p>
<h2 id="目录">目录</h2>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AFDeno%EF%BC%9F">什么是 Deno？</a></li>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AFDeno%EF%BC%9F%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%EF%BC%9F">什为什么是 Deno？为什么现在？</a></li>
<li><a href="#%E4%BD%A0%E5%BA%94%E8%AF%A5%E5%AD%A6%E4%B9%A0Deno%E5%90%97%EF%BC%9F">你应该学习 Deno 吗？</a></li>
<li><a href="#%E5%AE%83%E5%B0%86%E5%8F%96%E4%BB%A3Node.js%E5%90%97%EF%BC%9F">它将取代 Node.js 吗？</a></li>
<li><a href="#%E4%B8%80%E6%B5%81%E7%9A%84TypeScript%E6%94%AF%E6%8C%81">一流的 TypeScript 支持</a></li>
<li><a href="#%E4%B8%8ENode.js%E7%9A%84%E5%BC%82%E5%90%8C">与 Node.js 的异同</a></li>
<li><a href="#No-package-manager">No package manager</a></li>
<li><a href="#%E5%AE%89%E8%A3%85Deno">安装 Deno</a></li>
<li><a href="#Deno%E5%91%BD%E4%BB%A4">Deno 命令</a></li>
<li><a href="#%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AADeno%E5%BA%94%E7%94%A8">你的第一个 Deno 应用</a></li>
<li><a href="#Deno%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">Deno 代码示例</a></li>
<li><a href="#%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AADeno%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F">你的第一个 Deno 应用程序</a></li>
<li><a href="#The-Deno-sandbox">The Deno sandbox</a></li>
<li><a href="#Formatting-code">Formatting code</a></li>
<li><a href="#%E6%A0%87%E5%87%86%E5%BA%93">标准库</a></li>
<li><a href="#%E5%8F%A6%E4%B8%80%E4%B8%AADeno%E7%A4%BA%E4%BE%8B">另一个 Deno 示例</a></li>
<li><a href="#Deno%E6%98%AF%E5%90%A6%E6%9C%89Express/Hapi/Koa/*%EF%BC%9F">Deno 是否有 Express/Hapi/Koa/*？</a></li>
<li><a href="#%E7%A4%BA%E4%BE%8B%EF%BC%9A%E4%BD%BF%E7%94%A8Oak%E6%9E%84%E5%BB%BAREST-API">示例：使用 Oak 构建 REST API</a></li>
<li><a href="#more">more</a></li>
<li><a href="#%E8%8A%B1%E7%B5%AE">花絮</a></li>
</ul>
<p><a href="https://flaviocopes.com/page/deno-handbook/">你可以在此处获取此 Deno 手册的 PDF / ePub / Mobi 版本。</a></p>
<h2 id="什么是-deno">什么是 Deno</h2>
<p>如果你熟悉流行的服务器端 JavaScript 生态系统 Node.js，那么 Deno 就像 Node。当然在很多方面都得到了深刻的改善。</p>
<p>让我们从我最喜欢的 Deno 快速功能列表开始：</p>
<ul>
<li>它基于 JavaScript 语言的现代功能</li>
<li>它具有广泛的标准库</li>
<li>它以 TypeScript 为核心，以许多不同方式带来了巨大的优势，包括一流的 TypeScript 支持（你不必单独编译 TypeScript，它由 Deno 自动完成）</li>
<li>它包含 ES 模块</li>
<li>它没有包管理器</li>
<li>它具有一流的 <code>await</code></li>
<li>它具有内置的测试设施</li>
<li>它旨在尽可能地与浏览器兼容，例如通过提供内置对象<code>fetch</code>和全局<code>window</code>对象</li>
</ul>
<p>我们将在本指南中探索所有这些功能。</p>
<p>使用 Deno 并了解它的功能之后，Node.js 看起来会很...。</p>
<p>特别是因为 Node.js API 是基于回调的，因此它是在 promise 和 async / await 之前编写的。Node 中没有可用的更改，因为这样的更改将是巨大的。因此，我们陷入了回调或大量 API 调用的困境。</p>
<p>Node.js 非常棒，并将继续成为 JavaScript 世界中的事实上的标准。但是我认为我们将逐渐看到 Deno 由于其一流的 TypeScript 支持和现代标准库而越来越被采用。</p>
<p>Deno 可以负担所有使用现代技术编写的内容，因为没有向后兼容性需要维护。当然，我们无法保证十年之内 Deno 也会发生同样的事情，并且会出现一项新技术，但这是目前的现实。</p>
<h2 id="为什么是-deno？为什么现在">为什么是 Deno？为什么现在</h2>
<p>大约 2 年前，Node.js 的原始创建者 Ryan Dahl 在 JSConf EU 上宣布了 Deno。观看<a href="https://www.youtube.com/watch?v=M3BM9TB-8yA">YouTube 演讲视频</a>，（B站连接稍后更新）这非常有趣，如果你通常参与 Node.js 和 JavaScript，那么这是必看的。</p>
<p>每个项目经理都必须做出决定。Ryan 对 Node 中的一些早期决定感到遗憾。此外，技术也在不断发展，如今的 JavaScript 与 2009 年 Node 创立时的语言已经完全不同。考虑一下现代的 ES6 / 2016/2017 功能，等等。</p>
<p>因此，他开始了一个新项目，以创建第二波基于 JavaScript 的服务器端应用程序。</p>
<p>我现在而不是那时再写本指南的原因是，技术需要大量时间才能成熟。我们终于达到了 Deno 1.0（1.0 应该在 2020 年 5 月 13 日发布），这是 Deno 的第一个正式宣布稳定的版本。</p>
<blockquote>
<p>翻译本文时已经发布</p>
</blockquote>
<p>这似乎只是一个数字，但是 1.0 意味着直到 Deno 2.0 才不会有重大的重大变化。当你采用一种新技术时，这很重要-你不想学习某些东西，然后让它改变得太快。</p>
<h2 id="你应该学习-deno-吗">你应该学习 Deno 吗</h2>
<p>这是一个大问题。</p>
<p>学习诸如 Deno 之类的新东西是一项巨大的努力。我的建议是，如果你现在开始使用服务器端 JS，并且你还不了解 Node，并且从未编写过任何 TypeScript，那么我将从 Node 开始。</p>
<p>没有人因为选择 Node.js 而被解雇（用一个共同的说法解释）。</p>
<p>但是，如果你喜欢 TypeScript，则不要依赖项目中庞大的 npm 软件包，而想要在 await 任何地方使用它，那么 Deno 可能就是你想要的。</p>
<h2 id="它将取代-nodejs-吗">它将取代 Node.js 吗</h2>
<p>不能。Node.js 是一项庞大的，完善的，获得了难以置信的良好支持的技术，它将持续数十年。</p>
<h2 id="一流的-typescript-支持">一流的 TypeScript 支持</h2>
<p>Deno 用 Rust 和 TypeScript 编写，这两种语言今天正在迅速发展。</p>
<p>特别是，使用 TypeScript 编写意味着即使我们可能选择使用纯 JavaScript 编写代码，我们也可以获得 TypeScript 的很多好处。</p>
<p>使用 Deno 运行 TypeScript 代码不需要编译步骤-Deno 会自动为你执行此步骤。</p>
<p>你没有被迫使用 TypeScript 编写代码，但是 Deno 的核心是用 TypeScript 编写的事实是巨大的。</p>
<p>首先，越来越多的 JavaScript 程序员喜欢 TypeScript。</p>
<p>其次，你使用的工具可以推断出许多有关用 TypeScript 编写的软件的信息，例如 Deno。</p>
<p>这意味着，例如，当我们使用 VS Code 进行编码时（由于两者都是在 MicroSoft 上开发的，因此与 TypeScript 紧密集成），我们可以在编写代码时获得类型检查和高级<a href="https://code.visualstudio.com/docs/editor/intellisense">IntelliSense</a>功能等好处。换句话说，编辑器可以以非常有用的方式帮助我们。</p>
<h2 id="与-nodejs-的异同">与 Node.js 的异同</h2>
<p>由于 Deno 基本上是 Node.js 的替代品，因此直接比较两者非常有用。</p>
<p>相似之处：</p>
<ul>
<li>两者都是基于<a href="https://flaviocopes.com/v8/">V8 引擎</a>开发的</li>
<li>两者都非常适合使用 JavaScript 开发服务器端</li>
</ul>
<p>差异：</p>
<ul>
<li>Node 用 C ++和 JavaScript 编写。Deno 用 Rust 和 TypeScript 编写。</li>
<li>Node 有一个官方的软件包管理器，称为 <code>npm</code>。Deno 不会，而是让你从 URL 导入任何 ES 模块。</li>
<li>Node 使用 CommonJS 语法导入 pacakges。Deno 使用官方的 ES 模块。</li>
<li>Deno 在其所有 API 和标准库中都使用现代 ECMAScript 功能，而 Node.js 使用基于回调的标准库，并且没有计划对其进行升级。</li>
<li>Deno 通过权限提供了一个沙箱安全层。程序只能访问由用户设置为可执行文件的权限作为标志。Node.js 程序可以访问用户可以访问的任何内容。</li>
<li>Deno 长期以来一直在考虑将程序编译成可执行文件的可能性，而该可执行文件可以在没有外部依赖项（例如 Go）的情况下运行，但这还<a href="https://github.com/denoland/deno/issues/986">不是一件容易的事</a>。那将改变游戏规则。</li>
</ul>
<h2 id="没有包依赖管理（no-package-manager）">没有包依赖管理（No package manager）</h2>
<p>没有程序包管理器并且必须依靠 URL 来承载和导入程序包是有利有弊的。我真的很喜欢专家：它非常灵活，我们可以创建软件包而无需在 npm 这样的存储库中发布它们。</p>
<p>我认为某种软件包管理器将会出现，但是还没有官方的消息。</p>
<p>Deno 网站为第三方软件包提供代码托管（并因此通过 URL 分发）：<a href="https://deno.land/x/">https://deno.land/x/</a></p>
<h2 id="安装-deno">安装 Deno</h2>
<p>聊够了！让我们安装 Deno。</p>
<p>最简单的方法是使用<a href="https://flaviocopes.com/homebrew/">Homebrew</a>：</p>
<pre><code class="language-bash">brew install deno</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1geryr1k4fcj31ik0u0tdh.jpg" alt="brew install"></p>
<p>完成此操作后，你将可以访问<code>deno</code>命令。帮助是<code>deno --help</code>：</p>
<pre><code class="language-bash">flavio@mbp~&gt; deno --help
deno 0.42.0
A secure JavaScript and TypeScript runtime

Docs: https://deno.land/std/manual.md
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL, supply no arguments:
  deno

To execute a script:
  deno run https://deno.land/std/examples/welcome.ts
  deno https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:
  deno eval &quot;console.log(30933 + 404)&quot;

Run &#39;deno help run&#39; for &#39;run&#39;-specific flags.

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help
            Prints help information

    -L, --log-level &lt;log-level&gt;
            Set log level [possible values: debug, info]

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
    -V, --version
            Prints version information


SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    completions    Generate shell completions
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    repl           Read Eval Print Loop
    run            Run a program given a filename or url to the module
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to newest version

ENVIRONMENT VARIABLES:
    DENO_DIR             Set deno&#39;s base directory (defaults to $HOME/.deno)
    DENO_INSTALL_ROOT    Set deno install&#39;s output directory
                         (defaults to $HOME/.deno/bin)
    NO_COLOR             Set to disable color
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Same but for HTTPS</code></pre>
<h2 id="deno-命令">Deno 命令</h2>
<p>请注意<code>SUBCOMMANDS</code>帮助中的部分，其中列出了我们可以运行的所有命令。我们有哪些子命令？</p>
<ul>
<li><code>bundle</code> 将项目的模块和依赖项捆绑到单个文件中</li>
<li><code>cache</code> 缓存依赖项</li>
<li><code>completions</code> !!generate shell completions</li>
<li><code>doc</code> 显示模块的文档</li>
<li><code>eval</code> 运行一段代码，例如 <code>deno eval &quot;console.log(1 + 2)</code></li>
<li><code>fmt</code> 内置的代码格式化程序（类似于Go里面的 <code>gofmt</code>）</li>
<li><code>help</code> 打印此消息或给定子命令的帮助</li>
<li><code>info</code> 显示有关缓存的信息或与源文件有关的信息</li>
<li><code>install</code> 将脚本安装为可执行文件</li>
<li><code>repl</code> Read-Eval-Print-Loop（默认值）</li>
<li><code>run</code> 运行给定文件名或 URL 的程序</li>
<li><code>test</code> 运行测试</li>
<li><code>types</code> 打印运行时 TypeScript 声明</li>
<li><code>upgrade</code> 升级 deno 到最新版本</li>
</ul>
<p>你可以运行<code>deno &lt;subcommand&gt; help</code>以获取该命令的特定其他文档，例如<code>deno run --help</code>。</p>
<p>如帮助所述，我们可以使用此命令来启动 REPL（Read-Execute-Print-Loop），deno 而无需任何其他选择。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzlz0k1jj312k0iuwii.jpg" alt="Read-Execute-Print-Loop"></p>
<p>这与运行 <code>deno repl</code> 效果是相同的。</p>
<p>你将使用<code>deno</code>命令的更常见方式是执行 TypeScript 文件中包含的 Deno 应用程序。</p>
<p>你可以同时运行 TypeScript（.ts）文件或 JavaScript（.js）文件。</p>
<p>如果你不熟悉 TypeScript，请不要担心：Deno 是用 TypeScript 编写的，但是你可以使用 JavaScript 编写“客户端”应用程序。</p>
<p>如果你想上手的TypeScript话，我的<a href="https://flaviocopes.com/typescript/">TypeScript教程</a>将帮助你快速上手。</p>
<h2 id="你的第一个-deno-应用">你的第一个 Deno 应用</h2>
<p>让我们第一次运行 Deno 应用程序。</p>
<p>我感到非常惊奇的是，你甚至不必写一行-你可以从任何 URL 运行命令。</p>
<p>Deno 下载程序，进行编译，然后运行：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzrkngrdj31h00g2jtk.jpg" alt="Deno"></p>
<p>当然，我一般不建议从 Internet 运行任意代码。在这种情况下，我们从 Deno 官方网站上运行它，另外 Deno 还有一个沙箱，可以阻止程序执行你不希望做的任何事情。稍后再详细介绍。</p>
<p>这个程序很简单，只需要一个<code>console.log()</code>调用：</p>
<pre><code class="language-typescript">console.log(&quot;Welcome to Deno 🦕&quot;);</code></pre>
<p>如果使用浏览器打开<a href="https://deno.land/std/examples/welcome.ts">https://deno.land/std/examples/welcome.ts</a>URL，则会看到以下页面：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzu0s6sej30kw0djq4c.jpg" alt="welcome.ts"></p>
<p>奇怪吧？你可能希望使用 TypeScript 文件，但是我们有一个网页。原因是 Deno 网站的 Web 服务器知道你正在使用浏览器，并为你提供了更加用户友好的页面。</p>
<p>wget 例如，使用相同的 UR 来下载 text/plain 它，而不是请求它的版本 text/html：</p>
<p>以<code>wget</code>为例，下载同样的URL，用<code>wget</code> 以<code>text/plain</code>方式请求，而不是<code>text/html</code>。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzvv2ti6j30z60fogr9.jpg" alt="wget"></p>
<p>如果你想再运行这个程序，现在已经被<code>Deno</code>缓存了，不需要再下载了。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzwenogpj31920lmtbi.jpg" alt="Deno"></p>
<p>你可以用 <code>--reload</code> 参数强制重载原始源码</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzxpbhkoj31920g2ac7.jpg" alt="Deno"></p>
<p>deno run 有许多未在清单中列出的不同选项 deno --help。相反，你需要运行 deno run --help 以显示它们：</p>
<p><code>deno run</code> 有很多不同的选项，但在 <code>deno --help</code> 中没有列出。相反，你需要运行 <code>deno run --help</code> 来显示这些选项。</p>
<pre><code class="language-bash">flavio@mbp~&gt; deno run --help
deno-run
Run a program given a filename or url to the module.

By default all programs are run in sandbox without access to disk, network or
ability to spawn subprocesses.
  deno run https://deno.land/std/examples/welcome.ts

Grant all permissions:
  deno run -A https://deno.land/std/http/file_server.ts

Grant permission to read from disk and listen to network:
  deno run --allow-read --allow-net https://deno.land/std/http/file_server.ts

Grant permission to read whitelisted files from disk:
  deno run --allow-read=/etc https://deno.land/std/http/file_server.ts

USAGE:
    deno run [OPTIONS] &lt;SCRIPT_ARG&gt;...

OPTIONS:
    -A, --allow-all
            Allow all permissions

        --allow-env
            Allow environment access

        --allow-hrtime
            Allow high resolution time measurement

        --allow-net=&lt;allow-net&gt;
            Allow network access

        --allow-plugin
            Allow loading plugins

        --allow-read=&lt;allow-read&gt;
            Allow file system read access

        --allow-run
            Allow running subprocesses

        --allow-write=&lt;allow-write&gt;
            Allow file system write access

        --cached-only
            Require that remote dependencies are already cached

        --cert &lt;FILE&gt;
            Load certificate authority from PEM encoded file

    -c, --config &lt;FILE&gt;
            Load tsconfig.json configuration file

    -h, --help
            Prints help information

        --importmap &lt;FILE&gt;
            UNSTABLE:
            Load import map file
            Docs: https://deno.land/std/manual.md#import-maps
            Specification: https://wicg.github.io/import-maps/
            Examples: https://github.com/WICG/import-maps#the-import-map
        --inspect=&lt;HOST:PORT&gt;
            activate inspector on host:port (default: 127.0.0.1:9229)

        --inspect-brk=&lt;HOST:PORT&gt;
            activate inspector on host:port and break at start of user script

        --lock &lt;FILE&gt;
            Check the specified lock file

        --lock-write
            Write lock file. Use with --lock.

    -L, --log-level &lt;log-level&gt;
            Set log level [possible values: debug, info]

        --no-remote
            Do not resolve remote modules

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
    -r, --reload=&lt;CACHE_BLACKLIST&gt;
            Reload source code cache (recompile TypeScript)
            --reload
              Reload everything
            --reload=https://deno.land/std
              Reload only standard modules
            --reload=https://deno.land/std/fs/utils.ts,https://deno.land/std/fmt/colors.ts
              Reloads specific modules
        --seed &lt;NUMBER&gt;
            Seed Math.random()

        --unstable
            Enable unstable APIs

        --v8-flags=&lt;v8-flags&gt;
            Set V8 command line options. For help: --v8-flags=--help


ARGS:
    &lt;SCRIPT_ARG&gt;...
            script args</code></pre>
<h2 id="deno-代码示例">Deno 代码示例</h2>
<p>除了上面我们运行的，Deno网站还提供了一些其他的例子，你可以去看看：<a href="https://deno.land/std/examples/">https://deno.land/std/examples/</a>。</p>
<p>在撰写本文时，我们可以找到：</p>
<ul>
<li><code>cat.ts</code> 打印的内容是作为参数提供的文件列表</li>
<li><code>catj.ts</code> 打印的内容是作为参数提供的文件列表</li>
<li><code>chat/</code> 聊天的实现</li>
<li><code>colors.ts</code> 打印一个彩色版本的 Hello world!</li>
<li><code>curl.ts</code> 一个简单的实现，curl 它打印指定为参数的 URL 的内容</li>
<li><code>echo_server.ts</code> TCP 回显服务器</li>
<li><code>gist.ts</code> 一个将文件发布到 gist.github.com 的程序</li>
<li><code>test.ts</code> 样本测试套件</li>
<li><code>welcome.ts</code> 一个简单的 console.log 语句（我们在上面运行的第一个程序）</li>
<li><code>xeval.ts</code> 允许你为收到的任何标准输入行运行任何 TypeScript 代码。曾经被称为 deno xeval 但自官方命令中删除。</li>
</ul>
<h2 id="第一个-deno-应用程序">第一个 Deno 应用程序</h2>
<p>我们来写一些代码吧。</p>
<p>你使用<code>deno run https://deno.land/std/examples/welcome.ts</code>运行的第一个Deno应用是别人写的一个应用，所以你没有看到任何关于Deno代码的样子。</p>
<p>我们从Deno官方网站上列出的默认示例应用开始。</p>
<pre><code class="language-typescript">import { serve } from &quot;https://deno.land/std/http/server.ts&quot;;
const s = serve({ port: 8000 });
console.log(&quot;http://localhost:8000/&quot;);
for await (const req of s) {
  req.respond({ body: &quot;Hello World\n&quot; });
}</code></pre>
<p>这段代码从<code>http/server</code>模块中导入服务函数。看到了吗？我们不需要先安装，而且也不会像Node模块那样存储在本地机器上。这也是Deno安装速度快的原因之一。</p>
<p>从 <code>https://deno.land/std/http/server.ts</code> 导入会导入最新版本的模块。你可以使用<code>@VERSION</code>导入特定的版本，就像这样。</p>
<pre><code class="language-typescript">import { serve } from &quot;https://deno.land/std@v0.42.0/http/server.ts&quot;;</code></pre>
<p>该 serve 函数在此文件中的定义如下：</p>
<pre><code class="language-typescript">/**
 * Create a HTTP server
 *
 *     import { serve } from &quot;https://deno.land/std/http/server.ts&quot;;
 *     const body = &quot;Hello World\n&quot;;
 *     const s = serve({ port: 8000 });
 *     for await (const req of s) {
 *       req.respond({ body });
 *     }
 */
export function serve(addr: string | HTTPOptions): Server {
  if (typeof addr === &quot;string&quot;) {
    const [hostname, port] = addr.split(&quot;:&quot;);
    addr = { hostname, port: Number(port) };
  }

  const listener = listen(addr);
  return new Server(listener);
}</code></pre>
<p>我们继续实例化一个服务器，调用<code>server()</code>函数传递一个带有端口属性的对象。</p>
<p>然后我们运行这个循环来响应来自服务器的每一个请求。</p>
<pre><code class="language-typescript">for await (const req of s) {
  req.respond({ body: &quot;Hello World\n&quot; });
}</code></pre>
<p>请注意，我们使用<code>await</code>关键字而不需要将其封装到异步函数中，因为Deno实现了顶层的<code>await</code>。</p>
<p>让我们在本地运行这个程序。我假设你使用的是VS Code，但你可以使用任何你喜欢的编辑器。</p>
<p>我建议从<code>justjavac</code>安装Deno扩展（我试过的时候还有一个同名的扩展，但是已经被淘汰了，可能将来会消失）。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges104sizrj31270q4wkz.jpg" alt="justjavac"></p>
<p>该扩展将为<code>VS Code</code>提供几个实用工具和不错的东西来帮助你编写应用程序。</p>
<p>现在在一个文件夹中创建一个<code>app.ts</code>文件，然后粘贴上面的代码。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges10z15fmj30tf0kv0v0.jpg" alt="app.ts"></p>
<p>现在用<code>deno run app.ts</code>运行它。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges123ubtzj30z60s6wju.jpg" alt="app.ts"></p>
<p>Deno先下载我们导入的那个依赖，就可以下载所有需要的依赖项。</p>
<p><code>https://deno.land/std/http/server.ts</code> 文件本身就有几个依赖关系。</p>
<pre><code class="language-typescript">import { encode } from &quot;../encoding/utf8.ts&quot;;
import { BufReader, BufWriter } from &quot;../io/bufio.ts&quot;;
import { assert } from &quot;../testing/asserts.ts&quot;;
import { deferred, Deferred, MuxAsyncIterator } from &quot;../async/mod.ts&quot;;
import {
  bodyReader,
  chunkedBodyReader,
  emptyReader,
  writeResponse,
  readRequest,
} from &quot;./_io.ts&quot;;
import Listener = Deno.Listener;
import Conn = Deno.Conn;
import Reader = Deno.Reader;</code></pre>
<p>而这些是自动导入的。</p>
<p>在最后，我们还有一个问题。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges14r5we3j30z60a4gp9.jpg" alt="app.ts"></p>
<h2 id="the-deno-sandbox">The-Deno-sandbox</h2>
<p>我之前提到过，Deno有一个沙盒，可以防止程序做一些你不允许的事情。</p>
<p>这意味着什么呢？</p>
<p>Ryan在Deno的介绍讲座中提到的一件事是，有时候你想在Web浏览器之外运行一个JavaScript程序，却不想让它在你的系统中访问任何它想要的东西。或者使用网络与外部世界对话。</p>
<p>没有什么可以阻止Node.js程序获取你系统上的SSH密钥或其他任何东西，并将其发送到服务器上。这就是为什么我们通常只安装来自可信来源的Node包的原因。但是，如果我们使用的一个项目被黑客入侵了，反过来，其他人也会被黑客入侵，我们怎么知道呢？</p>
<p>Deno试图复制浏览器实现的相同权限模型。除非你明确允许，否则在浏览器中运行的任何JavaScript都不能在你的系统上做不正当的事情。</p>
<p>回到Deno，如果一个程序想要像前面的例子一样访问网络，那么我们需要给它权限。</p>
<p>我们可以通过在运行命令时传递一个标志来实现，本例中是 <code>--allow-net</code>。</p>
<pre><code class="language-bash">deno run --allow-net app.ts</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1luymhsj30nm07cdhk.jpg" alt="allow-net"></p>
<p>该应用程序现在在端口 8000 上运行 HTTP 服务器：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1sh7p19j30p80dj3zi.jpg" alt="allow-net"></p>
<p>其他标志允许 Deno 解锁其他功能：</p>
<ul>
<li><code>--allow-env</code> 允许访问环境变量</li>
<li><code>--allow-hrtime</code> 允许高分辨率时间测量</li>
<li><code>--allow-net=&lt;allow-net&gt;</code> 允许网络访问</li>
<li><code>--allow-plugin</code> 允许加载插件</li>
<li><code>--allow-read=&lt;allow-read&gt;</code> 允许文件系统读取权限</li>
<li><code>--allow-run</code> 允许运行子进程</li>
<li><code>--allow-write=&lt;allow-write&gt;</code> 允许文件系统写入访问</li>
<li><code>--allow-all</code> 允许所有权限(与<code>-A</code>相同)</li>
</ul>
<p><code>net</code>、<code>read</code>和<code>write</code>的权限可以是细化的。例如，你可以使用 <code>--allow-read=/dev</code>，允许从特定文件夹中读取。</p>
<h2 id="格式化代码">格式化代码</h2>
<p>我非常喜欢Go中的一个东西是Go编译器自带的<code>gofmt</code>命令。所有的Go代码看起来都是一样的。每个人都在使用<code>gofmt</code>。</p>
<p>JavaScript程序员都习惯于运行<a href="https://flaviocopes.com/prettier/">Prettier</a>，而<code>deno fmt</code>实际上就是在引擎盖下运行的。</p>
<p>假设你有一个格式化严重的文件是这样的。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1z0kmprj30tf0kv0v3.jpg" alt="deno fmt"></p>
<p>你运行<code>deno fmt app.ts</code>，它就会自动正确的格式化，还可以在缺少分号的地方加上。</p>
<h2 id="标准库">标准库</h2>
<p>尽管该项目还很年轻，但 Deno 标准库仍然很庞大。</p>
<p>包括：</p>
<ul>
<li><code>archive</code> !!tar archive utilities</li>
<li><code>async</code> 异步工具</li>
<li><code>bytes</code> 帮助器来操作字节切片</li>
<li><code>datetime</code> 日期/时间解析</li>
<li><code>encoding</code> 各种格式的编码/解码</li>
<li><code>flags</code> 解析命令行标志</li>
<li><code>fmt</code> 格式化和打印</li>
<li><code>fs</code> 文件系统 API</li>
<li><code>hash</code> 加密库</li>
<li><code>http</code> HTTP 服务器</li>
<li><code>io</code> I/O 库</li>
<li><code>log</code> 日志实用程序</li>
<li><code>mime</code> !!support for multipart data</li>
<li><code>node</code> Node.js兼容层</li>
<li><code>path</code> 路径操纵</li>
<li><code>ws</code> websockets</li>
</ul>
<h2 id="另一个-deno-示例">另一个 Deno 示例</h2>
<p>我们再来看看Deno APP的例子，从Deno的例子来看：<code>cat</code>。</p>
<pre><code class="language-typescript">const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}</code></pre>
<p>这就把<code>Deno.args</code>的内容分配给了文件名变量，<code>Deno.args</code>是一个包含所有发送到命令中的参数的变量。</p>
<p>我们对这些参数进行迭代，对每一个参数，我们使用<code>Deno.open()</code>打开文件，并使用<code>Deno.copy()</code>将文件的内容打印到<code>Deno.stdout</code>。最后我们关闭该文件。</p>
<p>如果你使用</p>
<pre><code class="language-bash">deno run https://deno.land/std/examples/cat.ts</code></pre>
<p>程序被下载编译后，由于我们没有指定任何参数，所以没有发生任何事情。</p>
<p>现在试试</p>
<pre><code class="language-bash">deno run https://deno.land/std/examples/cat.ts app.ts</code></pre>
<p>假设你在同一个文件夹里有之前项目中的<code>app.ts</code>。</p>
<p>你会得到一个权限错误。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2666arzj30qv0dl42x.jpg" alt="app.ts"></p>
<p>因为 Deno 默认情况下不允许访问文件系统。使用以下命令授予对当前文件夹的访问权限<code>--allow-read=./</code>：</p>
<pre><code class="language-bash">deno run --allow-read=./ https://deno.land/std/examples/cat.ts app.ts</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges28mnzlyj30qv0c7djl.jpg" alt="allow-read"></p>
<h2 id="deno-是否有-expresshapikoa">Deno 是否有 Express/Hapi/Koa/*</h2>
<ul>
<li><a href="https://github.com/drashland/deno-drash">deno-drash</a></li>
<li><a href="https://github.com/NMathar/deno-express">deno-express</a></li>
<li><a href="https://github.com/oakserver/oak">oak</a></li>
<li><a href="https://github.com/sholladay/pogo">pogo</a></li>
<li><a href="https://github.com/keroxp/servest">servest</a></li>
</ul>
<h2 id="示例：使用-oak-构建-rest-api">示例：使用 Oak 构建 REST-API</h2>
<p>我想做一个简单的例子，介绍一下如何使用Oak构建<code>REST API</code>。Oak很有意思，因为它的灵感来自于Koa，也就是流行的Node.js中间件，正因为如此，如果你以前用过的话，对它很熟悉。</p>
<p>我们要构建的API非常简单。</p>
<p>我们的服务器将在内存中存储一个带有名字和年龄的狗的列表。</p>
<p>我们想：</p>
<ul>
<li>添加狗狗</li>
<li>列出狗狗</li>
<li>获取有关特定狗的详细信息</li>
<li>从名单上删除一只狗</li>
<li>更新狗的年龄</li>
</ul>
<p>我们将使用 TypeScript 进行此操作，但是没有什么可以阻止你使用 JavaScript 编写 API-你只需删除类型。</p>
<p>创建一个 <code>app.ts</code> 文件。</p>
<p>让我们开始从 Oak 导入 <code>Application</code> 和 <code>Router</code> 对象：</p>
<pre><code class="language-typescript">import { Application, Router } from &quot;https://deno.land/x/oak/mod.ts&quot;;</code></pre>
<p>然后我们得到环境变量 <code>PORT</code> 和 <code>HOST</code>:</p>
<pre><code class="language-typescript">const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || &quot;127.0.0.1&quot;;</code></pre>
<p>默认情况下，我们的应用程序将在 <code>localhost：4000</code> 上运行。</p>
<p>现在，我们创建 <code>Oak</code> 应用程序并启动它：</p>
<pre><code class="language-typescript">const router = new Router();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(\`Listening on port \${PORT}...\`);

await app.listen(\`\${HOST}:\${PORT}\`);</code></pre>
<p>现在，应用程序应该可以正常编译了。</p>
<pre><code class="language-bash">deno run --allow-env --allow-net app.ts</code></pre>
<p>然后 Deno 将下载依赖项：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2lcj173j30pn0v7q9h.jpg" alt="Deno"></p>
<p>然后在<code>4000</code>端口上监听。</p>
<p>下次运行该命令时，Deno会跳过安装部分，因为这些包已经被缓存了。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2lzx6q1j30u409f761.jpg" alt="Deno"></p>
<p>在文件的顶部，让我们定义一个狗的接口，然后我们声明一个初始的<code>Dogs</code>数组<code>Dog</code>对象。</p>
<pre><code class="language-typescript">interface Dog {
  name: string;
  age: number;
}

let dogs: Array&lt;Dog&gt; = [
  {
    name: &quot;Roger&quot;,
    age: 8,
  },
  {
    name: &quot;Syd&quot;,
    age: 7,
  },
];</code></pre>
<p>现在，让我们来实际实现API。</p>
<p>我们已经准备好了一切。在你创建了路由器之后，让我们添加一些函数，这些函数将在任何时候触发这些端点中的一个端点时被调用。</p>
<pre><code class="language-typescript">const router = new Router();

router
  .get(&quot;/dogs&quot;, getDogs)
  .get(&quot;/dogs/:name&quot;, getDog)
  .post(&quot;/dogs&quot;, addDog)
  .put(&quot;/dogs/:name&quot;, updateDog)
  .delete(&quot;/dogs/:name&quot;, removeDog);</code></pre>
<p>看到了吗？我们的定义是</p>
<ul>
<li><code>GET /dogs</code></li>
<li><code>GET /dogs/:name</code></li>
<li><code>POST /dogs</code></li>
<li><code>PUT /dogs/:name</code></li>
<li><code>DELETE /dogs/:name</code></li>
</ul>
<p>让我们一一实现。</p>
<p>从开始 <code>GET /dogs</code>，它将返回所有狗的列表：</p>
<pre><code class="language-typescript">export const getDogs = ({ response }: { response: any }) =&gt; {
  response.body = dogs;
};</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2q3hbdyj30of0hcgnf.jpg" alt="getDogs"></p>
<p>接下来，我们就来看看如何通过名字来检索狗。</p>
<pre><code class="language-typescript">export const getDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) =&gt; {
  const dog = dogs.filter((dog) =&gt; dog.name === params.name);
  if (dog.length) {
    response.status = 200;
    response.body = dog[0];
    return;
  }

  response.status = 400;
  response.body = { msg: \`Cannot find dog \${params.name}\` };
};</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2qv3ki2j30of0hcmys.jpg" alt="getDog"></p>
<p>这是我们添加新狗的方法：</p>
<pre><code class="language-typescript">export const addDog = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) =&gt; {
  const body = await request.body();
  const dog: Dog = body.value;
  dogs.push(dog);

  response.body = { msg: &quot;OK&quot; };
  response.status = 200;
};</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2oymgidj30of0hcgnb.jpg" alt="addDog"></p>
<p>注意，我现在使用 <code>const body = await request.body()</code> 来获取正文的内容，因为<code>name</code>和<code>age</code>值是以 JSON 的形式传递的。</p>
<p>这是我们更新狗的年龄的方法：</p>
<pre><code class="language-typescript">export const updateDog = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string;
  };
  request: any;
  response: any;
}) =&gt; {
  const temp = dogs.filter((existingDog) =&gt; existingDog.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 200;
    response.body = { msg: &quot;OK&quot; };
    return;
  }

  response.status = 400;
  response.body = { msg: \`Cannot find dog \${params.name}\` };
};</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2rsqgn2j30of0hcabu.jpg" alt="updateDog"></p>
<p>这是我们如何从列表中删除狗的方法：</p>
<pre><code class="language-typescript">export const removeDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) =&gt; {
  const lengthBefore = dogs.length;
  dogs = dogs.filter((dog) =&gt; dog.name !== params.name);

  if (dogs.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: \`Cannot find dog \${params.name}\` };
    return;
  }

  response.body = { msg: &quot;OK&quot; };
  response.status = 200;
};</code></pre>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2srgk25j30of0hcabq.jpg" alt="removeDog"></p>
<p>这是完整的示例代码：</p>
<pre><code class="language-typescript">import { Application, Router } from &quot;https://deno.land/x/oak/mod.ts&quot;;

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || &quot;127.0.0.1&quot;;

interface Dog {
  name: string;
  age: number;
}

let dogs: Array&lt;Dog&gt; = [
  {
    name: &quot;Roger&quot;,
    age: 8,
  },
  {
    name: &quot;Syd&quot;,
    age: 7,
  },
];

export const getDogs = ({ response }: { response: any }) =&gt; {
  response.body = dogs;
};

export const getDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) =&gt; {
  const dog = dogs.filter((dog) =&gt; dog.name === params.name);
  if (dog.length) {
    response.status = 200;
    response.body = dog[0];
    return;
  }

  response.status = 400;
  response.body = { msg: \`Cannot find dog \${params.name}\` };
};

export const addDog = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) =&gt; {
  const body = await request.body();
  const { name, age }: { name: string; age: number } = body.value;
  dogs.push({
    name: name,
    age: age,
  });

  response.body = { msg: &quot;OK&quot; };
  response.status = 200;
};

export const updateDog = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string;
  };
  request: any;
  response: any;
}) =&gt; {
  const temp = dogs.filter((existingDog) =&gt; existingDog.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 200;
    response.body = { msg: &quot;OK&quot; };
    return;
  }

  response.status = 400;
  response.body = { msg: \`Cannot find dog \${params.name}\` };
};

export const removeDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) =&gt; {
  const lengthBefore = dogs.length;
  dogs = dogs.filter((dog) =&gt; dog.name !== params.name);

  if (dogs.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: \`Cannot find dog \${params.name}\` };
    return;
  }

  response.body = { msg: &quot;OK&quot; };
  response.status = 200;
};

const router = new Router();
router
  .get(&quot;/dogs&quot;, getDogs)
  .get(&quot;/dogs/:name&quot;, getDog)
  .post(&quot;/dogs&quot;, addDog)
  .put(&quot;/dogs/:name&quot;, updateDog)
  .delete(&quot;/dogs/:name&quot;, removeDog);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(\`Listening on port \${PORT}...\`);

await app.listen(\`\${HOST}:\${PORT}\`);</code></pre>
<h2 id="更多">更多</h2>
<p>Deno 官方网站为 <a href="https://deno.land">https://deno.land</a></p>
<p>API 文档位于 <a href="https://doc.deno.land">https://doc.deno.land</a> 和 <a href="https://deno.land/typedoc/index.html">https://deno.land/typedoc/index.html</a></p>
<p>awesome-deno <a href="https://github.com/denolib/awesome-deno">https://github.com/denolib/awesome-deno</a></p>
<h2 id="花絮">花絮</h2>
<ul>
<li>Deno 提供了一个内置的 fetch 实现，该实现与浏览器中可用的匹配</li>
<li>Deno 正在进行与 Node.js stdlib 的兼容层</li>
</ul>
<h2 id="原文地址">原文地址</h2>
<p><a href="https://www.freecodecamp.org/news/the-deno-handbook/#your-first-deno-app">https://www.freecodecamp.org/news/the-deno-handbook/#your-first-deno-app</a></p>`

export {text}