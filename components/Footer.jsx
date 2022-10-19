import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=' w-full absolute container mx-auto z-10'>
        <div className='bg-slate-800 md:px-24 py-6'>
          <div className="grid md:grid-cols-3">
            <div className="px-4">
              <Link href='/'>
                <Image
                    src="/sinaubareng-logo.png"
                    width="200"
                    height="70"
                />
               </Link>
               <p className=''>SinauBareng.tk adalah Website yang dibuat khusus untuk kebutuhan belajar bersama. 
                Dengan berisikan artikel mengenai dunia teknologi. Saat ini website masih dalam tahap pengembangan. 
               </p>
            </div>
          </div>
          <div className='text-center mt-12'>
            <p className='text-slate-400'>Dibuat dengan NextJS dan Tailwind CSS</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer