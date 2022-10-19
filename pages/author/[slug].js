import React, { useState, useEffect } from 'react'
import { Layout } from '../../components';
import { getAuthors, getAuthorsDetails } from '../../services';

const Authors = () => {

  const [authors, setAuthors] = useState([]);
  
  useEffect(() => {
    getAuthors().then((newAuthors) => {
      setAuthors(newAuthors);
    });
  }, []);

  return (
    <Layout pageTitle={`Penulis ${authors.map((author) => (author.name))}`}>
      {authors.map((author)=>(
        <div className='container mx-auto lg:my-32 my-20'>
          <img
            src={author.photo.url}
            alt={author.name}
            className='mx-auto bg-white rounded-md'
          />
          <h1 className='text-center text-3xl my-4 text-secondary font-bold'>{author.name}</h1>
        </div>
      ))}
    </Layout>
  )
}

export default Authors;


export async function getStaticProps({ params }) {
    const posts = await getAuthorsDetails(params.slug);
    return {
      props: {
        posts,
      },
    };
  }
  
  
  export async function getStaticPaths() {
    const authors = await getAuthors(); 
    return {
      paths: authors.map(({ slug }) => ({ params: { slug } })),
      fallback: false,
    };
  }