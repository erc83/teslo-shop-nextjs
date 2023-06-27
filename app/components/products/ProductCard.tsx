

import { IProduct } from '@/interfaces'
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { FC, useMemo, useState } from 'react'

interface Props {       // va a ser un producto de type IProduct
    product: IProduct;   // solo es uno no es un arreglo
}


export const ProductCard: FC<Props> = ( {product} ) => {   //{product}   obligo a tomar el producto
    
    // para saber cuando el mouse esta encima y cuando no, lo puedo llamar en el GRID
    const [isHovered, setIsHovered] = useState(false);

    // memorizar para no calcular siempre
    const productImage = useMemo(() => {
        return isHovered
            ? `products/${ product.images[1]}`
            : `products/${ product.images[0]}`
    }, [isHovered, product.images])
    
    return (
    <Grid item xs={6} sm={4}
        onMouseEnter={ () => setIsHovered( true )}
        onMouseLeave={ () => setIsHovered( false )}
    >
        <Card>
            <CardActionArea>
                <CardMedia
                    component='img'
                    className='fadeIn'
                    
                    image={ productImage }
                    alt={ product.title }
                    
                    onLoad={ () => console.log('cargo')}
                />

            </CardActionArea>
        </Card>

        {/* fadeIn en los stylos css globales */}
        <Box sx={{ mt: 1 }} className="fadeIn">
            <Typography fontWeight={700}>{ product.title}</Typography>
            <Typography fontWeight={500}>{ `$${product.price}` }</Typography>
        </Box>

    </Grid>
  )
}
