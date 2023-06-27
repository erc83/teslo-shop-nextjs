'use client'
import {  Typography } from "@mui/material"

import { ShopLayout } from "@/app/components/layouts"
import { initialData } from "@/database/products"  // temporal
import { ProductList } from "./components/products"
// import { IProduct } from "@/interfaces"

export default function Home() {

  return (
    <ShopLayout title={"Tesla-shop - Home"} pageDescription={"Encuentra los mejores productos tesla aqui"} >
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb:1 }}>Todos los productos</Typography>

      {/* spacing= separacion entre cada Grid item se modifica por el ProductList   */}
      {/* me solicita un array vacio, as any temporal para sacar despues */}
      <ProductList products={ initialData.products as any} />



    </ShopLayout>
  )
}


