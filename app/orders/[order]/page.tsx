'use client'
import NextLink from "next/link"
import { Box, Card, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"

import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"

const OrderPage = ({params}: {params: { order:string }}) => {

    const param = params.order

    console.log( param )

    return (
    <ShopLayout title='Resumen de la orden  1232154652' pageDescription={'Resumen de la orden'} >
        <Typography variant='h1' component='h1'>Orden: {param}</Typography>

        {/* validacion cuando no esta pagada la orden */}
       {/*  <Chip 
          sx={{ my:2 }}
          label="Pendiente de pago"
          variant='outlined'
          color="error"
          icon={ <CreditCardOffOutlined />}
        /> */}

        {/* validacion cuando esta pagada la orden */}
        <Chip 
          sx={{ my:2 }}
          label="Orden Pagada"
          variant='outlined'
          color="success"
          icon={ <CreditScoreOutlined />}
        />

        <Grid container>
          <Grid item xs={12} sm={7}>
           
            {/* El resumen no es editable    <CartList editable /> */}
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className='summary-card'>
              <Typography variant='h2'>Resumen (3 productos)</Typography>

              <Divider sx={{ my: 1 }}  />

              <Box display={'flex'} justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href="/checkout/address" passHref legacyBehavior>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Eric Espinoza</Typography>
              <Typography>El Carmen 9999</Typography>
              <Typography>Santiago, Pudahuel</Typography>
              <Typography>Chile</Typography>
              <Typography>+56 999888777</Typography>

              <Divider sx={{ my: 1 }}  />

                {/* Lo envio al carro para que pueda editar */}
                <Box display={'flex'} justifyContent='end'>
                  <NextLink href="/cart" passHref legacyBehavior>
                    <Link underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>
  
                {/* Orden Summary */}
                <OrderSummary />
              <Box sx={{ mt:3 }}>
                
                {/* TODO: falta la condicion para saber si fue pagada la orden */}
                <h1>Pagar</h1>
                <Chip 
                  sx={{ my:2 }}
                  label="Orden Pagada"
                  variant='outlined'
                  color="success"
                  icon={ <CreditScoreOutlined />}
                />



              </Box>
            </Card>
          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage