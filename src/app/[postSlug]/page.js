import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import CodeSnippet from '@/components/CodeSnippet';


export const generateMetadata = async ({ params }) => {
  const { postSlug } = params;
  const { frontmatter } = await loadBlogPost(postSlug);
  return {
    title: `${frontmatter.title} • Bits & Bytes`
  }
}

async function BlogPost({ params }) {
  const { postSlug } = params;
  console.log('PARAMS', params)

  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
