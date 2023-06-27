'use client'
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"
import { CartList, OrderSummary } from "../components/cart"

const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription={'Carrito de compras de la tienda'} >
        <Typography variant='h1' component='h1'>Carrito</Typography>
    
        <Grid container>
          <Grid item xs={12} sm={7}>
            {/* CartList   basado en los productos contruirlo, puede ser que lo leamos del localstorage o de una cookie */}
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className='summary-card'>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my: 1 }}  />
                {/* Orden Summary */}
                <OrderSummary />
              <Box sx={{ mt:3 }}>
                <Button color="secondary" className='circular-btn' fullWidth>
                  Checkout
                </Button>
              </Box>

            </Card>
          </Grid>

        </Grid>
    
    </ShopLayout>
  )
}

export default CartPage