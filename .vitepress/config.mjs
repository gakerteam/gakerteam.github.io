import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: '集客云PSA文档',
  titleTemplate: false,
  description: '集客云文档中心',
  appearance: false,
      head: [
          ['link', { rel: 'icon', href: 'https://swstatic.saleswork.cn/prod/login/favicon.ico' }]
      ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://swstatic.saleswork.cn/docs/gaker_docs_logo_8.png',
    footer: {
        copyright: 'Copyright © 2021 上海集客云软件有限公司｜沪ICP备2022019869号-1｜沪公网安备 31011302007178号'
    },
    nav: [
      { text: '帮助中心', link: '/help' },
      { text: 'GAKER DOCS', link: '/hanks' },
      { text: '集客云官网', link: 'https://www.gaker.com' }
    ],
    sidebar: {
      // 当用户位于 `help` 目录时，会显示此侧边栏
      '/help/': [
        {
            text: '帮助中心',
            items: [
                { text: '付费问题', link: '/help/payment-issue' },
                { text: '使用问题', link: '/help/usage-issue' },
                { text: '常见问题', link: '/help/common-issue' }
            ]
        }
      ],

      // 当用户位于hanks目录时，会显示此侧边栏
      '/hanks/': [
        {
          text: '入门',
          items: [
            { text: '快速了解"集客云 PSA"', link: '/hanks/' }
          ]
        },
        {
            text: '用户手册',
            items: [
                { text: '新用户入门', link: '/hanks/user-manual/user-guide' },
                { text: '管理员入门', link: '/hanks/user-manual/admin-guide' }
            ]
        },
        {
            text: '开发指南',
            items: [
                {
                    text: 'Gaker PaaS API',
                    collapsed: true,
                    items: [
                        { text: '通讯录', link: '/hanks/developer/gaker-paas-api/organization' },
                        { text: '应用信息', link: '/hanks/developer/gaker-paas-api/object' },
                        { text: '应用数据', link: '/hanks/developer/gaker-paas-api/data' },
                        { text: '数据字典', link: '/hanks/developer/gaker-paas-api/dict' }
                    ]
                }
            ]
        },
        {
            text: '阅读更多',
            items: [
                {
                    text: '更新日志',
                    collapsed: true,
                    items: [
                        { text: '集客云 PSA 2024', link: '/hanks/read-more/changelog/gaker-psa-2024' },
                        { text: '集客云 PSA 2023', link: '/hanks/read-more/changelog/gaker-psa-2023' },
                        { text: '集客云 PSA 2022', link: '/hanks/read-more/changelog/gaker-psa-2022' },
                        { text: '集客云 PSA 2021', link: '/hanks/read-more/changelog/gaker-psa-2021' }
                    ]
                },
                {
                    text: '应用案例',
                    collapsed: true,
                    items: [
                        { text: '嘿，试试用集客云来做一套 SOP 吧', link: '/hanks/read-more/use-cases/try-using-gaker-to-create-a-set-of-sop' },
                        { text: '从此，让销售爱上工作汇报', link: '/hanks/read-more/use-cases/make-sales-fall-in-love-with-work-reporting' }
                    ]
                }
            ]
        },
        {
            text: '政策',
            items: [
                { text: '服务条款', link: '/hanks/policy/terms-and-conditions' },
                { text: '隐私协议', link: '/hanks/policy/privacy-policy' }
            ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gakerteam' }
    ],
    sidebarMenuLabel: '导航',
    outlineTitle: ' ',
    outline: {
        level: [1,3]
    }
  }
})
