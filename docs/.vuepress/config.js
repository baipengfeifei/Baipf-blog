const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Baipf-blog",
  description: 'vdoing博客主题模板',
  base: '/Baipf-blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liqprGb5jE0ikxuZ",
        clientSecret: "779812473b32e8aa3e9d3320e7106eaf32e230f0",
        owner: "baipengfeifei",
        repo: "Baipf-blog",
      },
    ],
  ],
}
<<<<<<< HEAD
// vssue 评论插件
=======
>>>>>>> 0481cefbb2fa36e317771a319bdf8de56bc37d12
