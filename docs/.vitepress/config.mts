import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的技术博客",
  description: "前端学习与项目实践记录",
  base: '/my-blog/',   // 重要：必须与仓库名一致，注意斜杠
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/notes/' },
      { text: '项目复盘', link: '/projects/' },
    ],
    sidebar: {
      '/notes/': [
        { text: 'Vue3 响应式原理', link: '/notes/vue3-reactivity' },
        { text: 'Pinia 快速上手', link: '/notes/pinia' },
      ],
      '/projects/': [
        { text: '电商后台部署踩坑记', link: '/projects/deploy-issues' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/txy900' }
    ]
  }
})