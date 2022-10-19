import React from 'react';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative bg-slate-900'>
      <div className="absolute left-0 right-2 -top-10">
        <img 
          src={author.photo.url} 
          alt={author.name}
          height='100'
          width='100'
          className='bg-white rounded-lg align-middle mx-auto'
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author