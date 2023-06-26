'use client'

import React, { FC } from "react";
import Head from "next/head"

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;

}

export let metadata = {
    title : 'Shop Layout'
}

 
export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl}) => {
  
  
    // esta deprecado el Head en version 13.2 hacia arriba buscar pronta solucion
    return (
    <>
        <div>
        {/* deprecado el Head aqui  */}
        <Head>
            <title>{ title } </title>

            {/* metatag esto ayuda con el SEO*/}
            <meta name="description" content={ pageDescription } key={pageDescription} />
            
            {/* para compartir en facebook */}
            <meta name="og:title" content={ title }  key={ title } />
            <meta name="og:description" content={ pageDescription }  />
            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }  key= {imageFullUrl } />
                    )
            }
        </Head>
        </div>

        <nav>
            {/* TODO: Navbar */}
        </nav>

        {/* TODO: Sidebar */}

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

            {/* Footer */}
        <footer>
            {/* TODO: custom footer */}
        </footer>

    </>
  )
}

export default ShopLayout
