import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';





async function Home() {

  const blogData = await getBlogPostList();

  return (
    <div >
      <h1 >
        Latest Content:
      </h1>

     test

    </div>
  );
}

export default Home;
