import { Grid, Typography } from '@mui/material';



export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid  item xs={6} >
            <Typography>N°. Productos</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3</Typography>
        </Grid>

        <Grid  item xs={6} >
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{ `$${ 155.36}` }</Typography>
        </Grid>

        <Grid  item xs={6} >
            <Typography>Impuestos (19%)</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{ `$${ 32.25 }` }</Typography>
        </Grid>

        <Grid  item xs={6} sx={{ mt:2 }}>
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'} sx={{ mt:2 }}>
            <Typography variant='subtitle1'>{ `$${ 186.34 }` }</Typography>
        </Grid>

    </Grid>
  )
}
