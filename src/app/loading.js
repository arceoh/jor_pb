import React from 'react';

import {getBlogPostList} from '@/helpers/file-helpers';
import BlogSummaryCardSkeleton from '@/components/BlogSummaryCardSkeleton';

import styles from './homepage.module.css';




function Home() {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>    
     
      <BlogSummaryCardSkeleton
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
     
      <BlogSummaryCardSkeleton
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
     
      <BlogSummaryCardSkeleton
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
    </div>
  );
}

export default Home;
