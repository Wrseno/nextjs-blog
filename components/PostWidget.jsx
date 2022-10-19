import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-slate-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Artikel Terkait' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none cursor-pointer">
            <Link href={`/post/${post.slug}`}>
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                unoptimized
                className="align-middle rounded-md"
                src={post.featuredImage.url}
              />
            </Link>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`}  key={index}><a className="font-semibold hover:text-secondary hover:duration-300">{post.title}</a></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
