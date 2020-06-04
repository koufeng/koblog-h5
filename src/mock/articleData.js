import { ar01 } from '@/mock/01.js'
import { ar02 } from '@/mock/02.js'
import { ar03 } from '@/mock/03.js'
import { ar04 } from '@/mock/04.js'
import { ar05 } from '@/mock/05.js'
import { ar06 } from '@/mock/06.js'
const articleData = [
  {
    title: 'Deno 入门手册：附 TypeScript 代码实例',
    introduction: '它基于 JavaScript 语言的现代功能, 如果你熟悉流行的服务器端 JavaScript 生态系统 Node.js，那么 Deno 就像 Node。当然在很多方面都得到了深刻的改善。',
    id: 'DMxemBHR',
    article: ar01,
    category: 'deno',
    creationTime: '2019-04-12',
    author: 'Flavio Copes',
    label: ['deno', '后端']
  },
  {
    title: '从 Node 到 Deno',
    introduction: '上周我发表了一篇关于 Deno 的文章: 《如何用 Deno 和 Preact 创建一个聊天应用》。很多疑问接踵而至。期中大部分都是如何用 Done 来做 Node 之前所做的事情。',
    id: 'p0snMKRs',
    article: ar02,
    category: 'deno',
    creationTime: '2019-05-03',
    author: 'Flavio Copes',
    label: ['deno', '后端']
  },
  {
    title: '将footer固定在底部: Flexbox vs Grid',
    introduction: '多年来，我不断地参考 Matthew James Taylor 的这篇文章，寻找一种方法，无论页面内容的长度如何，都能让网页`footer`保持在页面底部。这个方法依赖于设置一个footer高度，虽然不能扩展，但在 BF（Flexbox之前）是一个非常好的解决方案。',
    id: '2eZzFy3T',
    article: ar03,
    category: 'css',
    creationTime: '2019-03-03',
    author: 'Stephanie Eckles',
    label: ['css', 'css3']
  },
  {
    title: '实现元素等高: Flexbox vs. Grid',
    introduction: '很久以前（大约7年前），我写了一个jQuery插件来计算等高列的效果。它确保了在一个非常特殊的情况下，无论内容的长度如何，都能保持内容框的高度相等。当时浮动的布局方式并没有解决这个问题',
    id: 'B88ypBir',
    article: ar04,
    category: 'css',
    creationTime: '2019-03-03',
    author: 'Stephanie Eckles',
    label: ['css', 'css3']
  },
  {
    title: '只用CSS实现响应式Full-Width img 2种方法',
    introduction: '以前在jquery流行的时候用于响应式背景图片的最受欢迎的工具是Backstretch jQuery插件。在 background-size 属性得到广泛支持之前（即IE&lt;9总市场份额下降了）我在大约30个项目中使用了此插件。',
    id: 'CdEP91zW',
    article: ar05,
    category: 'css',
    creationTime: '2019-03-03',
    author: 'Stephanie Eckles',
    label: ['css', 'css3']
  },
  {
    title: '纯CSS“返回顶部”特效',
    introduction: 'Back to top&quot;链接现在可能不经常使用，但有两个现代CSS技术很好地展示了它的特点。',
    id: 'G2n9s8zs',
    article: ar06,
    category: 'css',
    creationTime: '2019-03-03',
    author: 'Stephanie Eckles',
    label: ['css', 'css3']
  }
]

export {articleData}