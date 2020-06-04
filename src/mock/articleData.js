import { ar01 } from '@/mock/01.js'
import { ar02 } from '@/mock/02.js'
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
]

export {articleData}