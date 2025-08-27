import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';
import { notFound } from 'next/navigation';

import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import CodeSnippet from '@/components/CodeSnippet';
import BLOG_TITLE from '@/constants';


export const generateMetadata = async ({ params }) => {
  const { postSlug } = await params;

  const blogPostData = await loadBlogPost(
    postSlug
  );

  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;

  const blogPostData = await loadBlogPost(
    postSlug
  );
  
  if (!blogPostData) {
    notFound();
  }

  const { frontmatter, content } = blogPostData;



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
