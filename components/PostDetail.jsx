import React from 'react';
import moment from 'moment';
import Layout from './Layout';
import { MdDateRange } from 'react-icons/md';

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
      <div className='bg-slate-800 rounded-md lg:p-8 pb-12 mb-8'>
          <div className='relative overflow-hidden shadow-md mb-6'>
            <img 
              src={post.featuredImage.url}
              alt={post.title}
              className='object-top h-full w-full rounded-md'
            />
          </div>
          <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
            <div className="flex items-center mb-8 w-full">
                <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                  <img
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                  />
                  <p className="inline align-middle text-gray-500 ml-2 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-500 flex items-center gap-2">
                  <MdDateRange/>
                  <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
              </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
              {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                return getContentFragment(index, children, typeObj, typeObj.type);
              })}
          </div>
      </div>
  )
}

export default PostDetail