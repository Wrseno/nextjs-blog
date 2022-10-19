import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Layout } from '../../components';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

const PostDetails = ({ post }) => {


  return (
    <Layout pageTitle={post.title}>
      <div className='container mx-auto mb-8 md:py-32 py-20 md:px-24 px-2'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post} />
            {/* <MDXRemote {...post?.content}/> */}
            <Author author={post.author}/>
          </div>

          <div className='col-span-1 lg:col-span-4'>
              <div className='relative lg:sticky top-24'>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                <Categories/>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  const html = await serialize(data.content, { mdxOptions: {
    rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism
        ]
    } });

  return {
    props: {
      post: data,
      content: html
    },
  };
}


export async function getStaticPaths() {
  const posts = await getPosts(); 
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}