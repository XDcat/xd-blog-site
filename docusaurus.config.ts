import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '臭喜喜的笔记本',
  tagline: '现代、清爽、带标签和搜索的个人博客',
  favicon: 'img/favicon.ico',
  url: "https://xdcat.github.io",
  baseUrl: '/',
  organizationName: 'xdcat',
  projectName: 'xd-blog-site',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.ts', editUrl: 'https://github.com/xdcat/xd-blog-site/tree/main/'},
      blog: {
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        editUrl: 'https://github.com/xdcat/xd-blog-site/tree/main/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: {customCss: './src/css/custom.css'},
    } satisfies Preset.Options,
  ]],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: '臭喜喜的笔记本',
      logo: {alt: 'Xixi logo', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '文档'},
        {to: '/blog', label: '博客', position: 'left'},
        {href: 'https://github.com/xdcat/xd-blog-site', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: '内容', items: [{label: '文档', to: '/docs/intro'}, {label: '博客', to: '/blog'}]},
        {title: '更多', items: [{label: 'GitHub', href: 'https://github.com/xdcat/xd-blog-site'}]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 臭喜喜. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
