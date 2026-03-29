import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.ReactElement {
  return (
    <Layout title="臭喜喜的笔记本" description="现代、清爽、带标签和搜索的个人博客">
      <main style={{padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>臭喜喜的笔记本</h1>
        <p style={{fontSize: '1.2rem', maxWidth: 720}}>
          这是一个基于 Docusaurus 的个人博客 + 文档站，支持现代化界面、标签和搜索。
        </p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/docs/intro">进入文档</Link>
          <Link className="button button--secondary button--lg" to="/blog">查看博客</Link>
        </div>
      </main>
    </Layout>
  );
}
