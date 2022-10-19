import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import { MdDateRange } from 'react-icons/md';

const PostCard = ({ post, author }) => {

  return (
      <div className='bg-slate-800 rounded-md p-2 pb-12 mb-4'>
        <Link href={`/post/${post.slug}`}>
          <a className='hover:text-secondary hover:duration-300'> 
            <div className='w-full'>  
              <img 
                src={post.featuredImage.url} 
                alt={post.title}
                className='object-cover w-full rounded-md h-full' 
              />
            </div> 
            <h1 className='font-bold text-2xl mt-4'>{post.title}</h1>
            <p className='mb-4'>{post.excerpt}</p>
            <p className='text-slate-500 text-sm flex gap-2'>
              <img 
                src={post.author.photo.url} 
                alt={post.author.name} 
                height='30px'
                width='30px'
                className='bg-primary rounded-sm'
              />
              {post.author.name}
            </p>
            <p className='text-slate-500 text-sm flex items-center gap-1'><MdDateRange/>{moment(post.createdAt).format('DD MMM, YYYY')}</p>
          </a>
        </Link>
      </div>
  )
}

export default PostCard