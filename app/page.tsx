'use client'

import { ShopLayout } from "@/app/components/layouts"
import { Typography } from "@mui/material"

// import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {

  return (
    
    <ShopLayout title={"Tesla-shop - Home"} pageDescription={"Encuentra los mejores productos tesla aqui"} >
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb:1 }}>Todos los productos</Typography>
    </ShopLayout>
  )
}


