'use client'

import { ShopLayout } from "@/app/components/layouts"
import { ProductSlideshow } from "@/app/components/products";
import { ItemCounter } from "@/app/components/ui";
import { initialData } from "@/database/products"
import { Box, Button, Chip, Grid, Typography } from "@mui/material";


const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description} >
      <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
          {/* Slideshow, se queja porque necesita las imagenes */}
          <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* titulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography>

            {/* Cantidad */}
            <Box sx={{ my:2 }}> 
              <Typography variant="subtitle2">Cantidad</Typography>
            
              {/* ItemCounter, crear un componente reutilizable para esto */}
              <ItemCounter /> 
            </Box>

            {/* Agregar al Carrito */}
            <Button color="secondary" className='circular-btn'>
              Agregar al Carro
            </Button>

            {/* Avisar si no hay un disponible */}
          {/*   <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

            {/* description */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>  

          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

export default ProductPage