'use client'
import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"

import { ShopLayout } from "@/app/components/layouts"
import { initialData } from "@/database/products"  // temporal

export default function Home() {

  return (
    <ShopLayout title={"Tesla-shop - Home"} pageDescription={"Encuentra los mejores productos tesla aqui"} >
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb:1 }}>Todos los productos</Typography>

      {/* spacing= separacion entre cada Grid item   */}
      <Grid container spacing={4}>
        {
          initialData.products.map(product => (   // siempre que hacemos un map tiene que ir un key
            <Grid item xs={6} sm={4} key={ product.slug }>
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    /* aqui tenemos el nombre de la imagen que esta con la extension en la carpeta publica*/
                    image={`products/${ product.images[0] }`}
                    alt={ product.title }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </ShopLayout>
  )
}


