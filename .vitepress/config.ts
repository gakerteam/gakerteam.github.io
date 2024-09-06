import { link } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '集客云｜文档',
  description: '集客云文档中心 - 集客云，国内首家“专业服务自动化”软件提供商，面向50-1000人规模的专业服务企业，提供业财一体化和流程自动化解决方案',
  head: [
    ['link', { rel: 'icon', href: 'https://swstatic.saleswork.cn/prod/login/favicon.ico' }],
    [
      'meta',
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    ]
  ],
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/DocuFeature.vue', import.meta.url),
          ),
        },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'https://swstatic.saleswork.cn/docs/gaker_docs_logo_10.png',
      dark: 'https://swstatic.saleswork.cn/docs/gaker_docs_logo_10.png',
      height: 32,
    },
    nav: [
      { text: '指南', 
        items: [
          {text: '新用户入门', link: '/user-guide/'},
          {text: '管理员入门', link: '/admin-guide/'}
        ]
      },
      { text: '参考', link: '/reference/' },
      { text: '4.36.0', 
        items: [
          {text: '更新日志', link: '/change-logs/'}
        ]
      },
      { text: '集客云官网', link: 'https://www.gaker.com' }
    ],

    sidebar: {
      '/user-guide/':[
        {
          text: '总览',
          items: [
            { text: '全局业务流程', link: '/user-guide' },
            { text: '角色用例', link: '/user-guide/rolecase' }
          ]
        },
        {
          text: '通用操作',
          items: [
            { text: '注册登录', link: '/user-guide/register' },
            { text: '首页导航', link: '/user-guide/homepage' },
            { text: '应用管理', link: '/user-guide/app' },
          ]
        },
        {
          text: '业财一体化',
          items: [
            { text: '销售管理及应收核算', link: '/user-guide/sales' },
            { text: '项目管理及工时核算', link: '/user-guide/project' },
            { text: '采购管理及应付核算', link: '/user-guide/purchase' },
            { text: '其他库存管理', link: '/user-guide/stock' },
            { text: '预算管理及费用核算', link: '/user-guide/budget' },
            { text: '目标管理及业绩核算', link: '/user-guide/okr' }
          ]
        }
      ],
      '/admin-guide/':[
        {
          text: '概述',
          items: [
            { text: '集客云 aPaaS 平台简介', link: '/admin-guide' }
          ]
        },
        {
          text: '基础操作',
          items: [
            { text: '组织架构', link: '/admin-guide/org' },
            { text: '应用管理', link: '/admin-guide/app' },
            { text: '应用设置', link: '/admin-guide/app2' },
            { text: '权限管理', link: '/admin-guide/auth' }
          ]
        },
        {
          text: '流程引擎',
          items: [
            { text: '流程引擎概述', link: '/admin-guide/process' },
            { text: '业务流程', link: '/admin-guide/stateflow' },
            { text: '审批流程', link: '/admin-guide/approve' },
            { text: '自动化', link: '/admin-guide/auto' }
          ]
        },
        {
          text: '扩展插件',
          items: [
            { text: '映射规则', link: '/admin-guide/mapping' },
            { text: '公海池', link: '/admin-guide/pool' },
            { text: '下载模版', link: '/admin-guide/template' },
            { text: '工商查询', link: '/admin-guide/ic' },
            { text: '数据查重', link: '/admin-guide/duplicate' },
            { text: '业绩指标', link: '/admin-guide/indicator' },
            { text: '数据管理', link: '/admin-guide/data' }
          ]
        },
        {
          text: '行业模版',
          items: [
            { text: '行业模版', link: '/admin-guide/industry' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '入门',
          items: [
            { text: '快速了解"集客云 PSA"', link: '/reference' }
          ]
        },
        {
            text: '开发指南',
            items: [
                {
                    text: 'Gaker PaaS API',
                    items: [
                        { text: '通讯录', link: '/reference/developer/gaker-paas-api/organization' },
                        { text: '应用信息', link: '/reference/developer/gaker-paas-api/object' },
                        { text: '应用数据', link: '/reference/developer/gaker-paas-api/data' },
                        { text: '数据字典', link: '/reference/developer/gaker-paas-api/dict' }
                    ]
                }
            ]
        },
        {
            text: '应用案例',
            items: [
                { text: '试试用集客云来做一套SOP吧', link: '/reference/use-cases/try-using-gaker-to-create-a-set-of-sop' },
                { text: '从此，让销售爱上工作汇报', link: '/reference/use-cases/make-sales-fall-in-love-with-work-reporting' }
            ]
        },
        {
            text: '政策',
            items: [
                { text: '服务条款', link: '/reference/policy/terms-and-conditions' },
                { text: '隐私协议', link: '/reference/policy/privacy-policy' }
            ]
        }
      ],
      '/change-logs/': [
        {
          text: '最近更新',
          collapsed: true,
          items: [
              { text: '集客云 PSA', link: '/change-logs/' }
          ]
        },
        {
          text: '历史更新',
          collapsed: false,
          items: [
              { text: '集客云 PSA 2023', link: '/change-logs/gaker-psa-2023' },
              { text: '集客云 PSA 2022', link: '/change-logs/gaker-psa-2022' },
              { text: '集客云 PSA 2021', link: '/change-logs/gaker-psa-2021' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gakerteam' }
    ],
    sidebarMenuLabel: '导航',
    outlineTitle: '标题目录',
    outline: {
        level: [1,3]
    },
    footer: {
      copyright: 'Copyright © 2021 上海集客云软件有限公司｜沪ICP备2022019869号-1｜沪公网安备 31011302007178号'
    }
  },
})
