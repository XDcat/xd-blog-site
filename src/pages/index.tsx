import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.ReactElement {
  return (
    <Layout title="臭喜喜的笔记本" description="现代、清爽、带标签和搜索的个人博客">
      <main
        style={{
          minHeight: 'calc(100vh - 80px)',
          padding: '5rem 1.5rem',
          maxWidth: 1100,
          margin: '0 auto',
          background:
            'radial-gradient(circle at top left, rgba(124, 58, 237, 0.25), transparent 35%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 30%)',
        }}
      >
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(15, 23, 42, 0.72)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
          }}
        >
          <h1 style={{fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1}}>
            臭喜喜的笔记本
          </h1>
          <p style={{fontSize: '1.15rem', maxWidth: 760, lineHeight: 1.7, color: '#cbd5e1'}}>
            这是一个基于 Docusaurus 的个人博客 + 文档站，支持现代化界面、标签和搜索。
            现在样式已经整理好，主页、导航、博客和文档会保持统一视觉风格。
          </p>
          <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              进入文档
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              查看博客
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
