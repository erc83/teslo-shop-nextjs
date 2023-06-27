import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"

import { initialData } from "@/database/products"
import NextLink from "next/link"
import { ItemCounter } from "../ui"


// creando el arreglo
const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[3],
]

// en el producto necesitamos imagen el valor el total y otras informaciones
export const CartList = () => {

  return (
    <>
        {
            productInCart.map( product => (
                <Grid container  spacing={2} sx={{ mb:1 }} key={ product.slug}>
                    <Grid item xs={3}>
                        {/* Todo: llevar a la pagina del producto */}
                        <NextLink href="/product/slug" passHref legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia 
                                        image={`products/${ product.images[0]}`}
                                        component='img'
                                        sx={{ borderRadius: '5px '}}
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{ product.title }</Typography>
                            <Typography variant='body1'>Talla: <strong>M</strong></Typography>

                            {/* Conditional, cuando el cliente no tenga que editar */}
                        
                            <ItemCounter />

                        </Box>
                    </Grid>
                    <Grid item xs={2} display={"flex"} alignItems={"center"} flexDirection={'column'} >
                        <Typography variant="subtitle1">{ `$${ product.price }`}</Typography>
                    
                        {/* Condicion si es editable */}
                        <Button
                            variant="text"
                            color="secondary"
                        >
                            Remover
                        </Button>
                    </Grid>
                </Grid>
            ))
        }
    </>
  )
}

