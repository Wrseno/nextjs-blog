import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearchAlt2 } from 'react-icons/bi';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import React from 'react';

export default function Home({ posts }) {
  

  return (
    <Layout pageTitle='Website Belajar Coding dan Teknologi Digital Bersama'>
      <div className='md:py-32 py-20'>
        <div className='container mx-auto md:px-24 px-2'>
          <div className='grid lg:grid-cols-2'>

            <div className='w-full px-4'>
              <div className='rounded-full'>
                <Image
                  className='rounded-md'
                  unoptimized
                  src='/sinau_coding.jpg'
                  width='600'
                  height='400'
                />
              </div>
            </div>
            <div className='w-full px-4 md:my-auto'>
              <h1 className='font-semibold lg:text-4xl text-2xl uppercase mt-4 md:mt-0'><span className='text-secondary'>Sinau</span> <span className='bg-slate-800 px-2 rounded-lg'>Bareng.tk</span></h1>
              <p className='my-4'>Adalah sebuah website untuk belajar bersama. Dalam bidang Teknologi, Pemrograman dan semua yang masih berkaitan dengan teknologi digital.</p>

              <Link href='/' className=''>
                <a  className='hover:bg-primary hover:transition hover:ease-linear hover:duration-300 p-4 bg-secondary text-black font-semibold md:mt-12 block w-1/2 text-center lg:text-xl rounded-sm'>
                  Mulai Belajar
                </a>
              </Link>
              <div className='flex items-center my-auto '>
                <input type='search' name='search' className='p-4 bg-slate-800 text-white mt-6 block w-full rounded-sm mr-2'/>
                <button>
                  <BiSearchAlt2 size={55} className='mt-6 bg-slate-600 py-2 rounded-sm'/>
                </button>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 my-12 px-4 lg:w-full">         
            <div className="grid lg:grid-cols-3 gap-2">
              {posts.map((post, index) => ( <PostCard key={index} post={post.node} /> ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}



export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  return {
    props: { posts },
  };
}