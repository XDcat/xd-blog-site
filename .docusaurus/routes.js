import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/xd-blog-site/blog',
    component: ComponentCreator('/xd-blog-site/blog', 'beb'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/2026/03/29/docusaurus-launch',
    component: ComponentCreator('/xd-blog-site/blog/2026/03/29/docusaurus-launch', 'b54'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/archive',
    component: ComponentCreator('/xd-blog-site/blog/archive', '803'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/authors',
    component: ComponentCreator('/xd-blog-site/blog/authors', '6d2'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/tags',
    component: ComponentCreator('/xd-blog-site/blog/tags', '868'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/tags/blog',
    component: ComponentCreator('/xd-blog-site/blog/tags/blog', 'aef'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/tags/docusaurus',
    component: ComponentCreator('/xd-blog-site/blog/tags/docusaurus', 'da7'),
    exact: true
  },
  {
    path: '/xd-blog-site/blog/tags/launch',
    component: ComponentCreator('/xd-blog-site/blog/tags/launch', 'c0d'),
    exact: true
  },
  {
    path: '/xd-blog-site/docs',
    component: ComponentCreator('/xd-blog-site/docs', 'ba9'),
    routes: [
      {
        path: '/xd-blog-site/docs',
        component: ComponentCreator('/xd-blog-site/docs', '780'),
        routes: [
          {
            path: '/xd-blog-site/docs/tags',
            component: ComponentCreator('/xd-blog-site/docs/tags', 'a5e'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/agent',
            component: ComponentCreator('/xd-blog-site/docs/tags/agent', '532'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/agents',
            component: ComponentCreator('/xd-blog-site/docs/tags/agents', 'a51'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/ai',
            component: ComponentCreator('/xd-blog-site/docs/tags/ai', 'd8b'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/harness',
            component: ComponentCreator('/xd-blog-site/docs/tags/harness', '31d'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/long-running',
            component: ComponentCreator('/xd-blog-site/docs/tags/long-running', '52b'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/productivity',
            component: ComponentCreator('/xd-blog-site/docs/tags/productivity', '3a1'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs/tags/workflow',
            component: ComponentCreator('/xd-blog-site/docs/tags/workflow', '712'),
            exact: true
          },
          {
            path: '/xd-blog-site/docs',
            component: ComponentCreator('/xd-blog-site/docs', '37e'),
            routes: [
              {
                path: '/xd-blog-site/docs/',
                component: ComponentCreator('/xd-blog-site/docs/', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xd-blog-site/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/xd-blog-site/docs/tutorial-basics/create-a-blog-post', '69c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xd-blog-site/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/xd-blog-site/docs/tutorial-basics/create-a-document', '28c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/xd-blog-site/',
    component: ComponentCreator('/xd-blog-site/', '147'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
