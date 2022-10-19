import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
        <Head>
            <title>SinauBareng.tk | {''} {pageTitle}</title>
                <meta name="description" content="Website belajar koding bersama"/>
                <meta name="author" content="Warseno Bambang Setyono"/>
            <link rel="icon" href="/logo-sinaubareng.png" />
        </Head>
        <Header/>
            { children }
        <Footer/>
    </>
  )
}

export default Layout