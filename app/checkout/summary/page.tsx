'use client'
import { Box, Button, Card, Divider, Grid, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import NextLink from "next/link"

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'} >
        <Typography variant='h1' component='h1'>Resumen de la Orden</Typography>
    
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
                <Button color="secondary" className='circular-btn' fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage