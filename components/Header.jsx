import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlArrowDown } from "react-icons/sl";
import { getCategories } from '../services';

const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

    const [hamburger, setBurgerClass] = useState('hamburger-nonactive');
    const [menu_class, setMenuClass] = useState('menu-hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass('hamburger-active')
        setMenuClass('menu-visible')
    } else {
        setBurgerClass('hamburger-nonactive')
        setMenuClass('menu-hidden')
    } setIsMenuClicked(!isMenuClicked);
  }
  
  const [category, setCategory] = useState('category-hidden');
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);

  function handleCategoryClicked() {
    if (!isCategoryClicked) {
      setCategory('category-visible')
    } else {
      setCategory('category-hidden')
    } setIsCategoryClicked(!isCategoryClicked);
  }


  return (
    <>
        <header className='flex bg-transparent navbar-fixed top-0 left-0 w-full items-center z-10'>
        <div className="container lg:px-20 mx-auto">
          <div className="flex justify-between relative">
            <div className="px-4 my-auto hover:cursor-pointer">
              <Link href='/'>
                <Image
                    src="/sinaubareng-logo.png"
                    width="150"
                    height="50"
                />
               </Link>
            </div>
            <div className="flex items-center px-4">
              <button id={hamburger} name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={updateMenu}>
                <span className='hamburger-line transition duration-300 ease-in-out origin-top-left '></span>
                <span className='hamburger-line-2 transition duration-300 ease-in-out'></span>
                <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
              </button>

              <nav id={menu_class} className='hidden absolute py-5 bg-black bg-opacity-80 
               shadow-lg rounded-b-lg max-w-[200px] w-full right-4 top-full text-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                <ul className='block lg:flex'>
                  <li className='group'><Link href='/'><a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg'>Beranda</a></Link></li>
                  <li className='group'>
                    <button onClick={handleCategoryClicked}>
                        <a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg items-center'>
                            Kategori <SlArrowDown size={10} className="ml-2" />
                        </a>
                    </button>
                    <div id={category} className="hidden lg:absolute z-10 lg:w-1/4">
                      <div className='grid gap-4 bg-slate-800 p-6 lg:rounded-md bg-opacity-90'>
                        {categories.map((category) => (
                          <Link key={category.slug} href={`/category/${category.slug}`}>
                            <a className='hover:text-secondary'>
                                {category.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className='group'><Link href='/about'><a className='text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg'>Tentang Kami</a></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header