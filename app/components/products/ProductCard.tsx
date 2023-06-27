

import { IProduct } from '@/interfaces'
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import { FC } from 'react'

interface Props {       // va a ser un producto de type IProduct
    product: IProduct;   // solo es uno no es un arreglo
}


export const ProductCard: FC<Props> = ( {product} ) => {   //{product}   obligo a tomar el producto
  return (
    <Grid item xs={6} sm={4} key={ product.slug}>
        <Card>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image={`products/${ product.images[0]}`}
                    alt={ product.title }
                >

                </CardMedia>
            </CardActionArea>
        </Card>
    </Grid>
  )
}
