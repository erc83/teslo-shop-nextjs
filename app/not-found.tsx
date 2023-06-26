'use client'

import { Box, Typography } from "@mui/material"

import { ShopLayout } from "./components/layouts"

export const Custom404 = () => {
  return  (
    <ShopLayout title={"Page not found"} pageDescription={"No hay nada que mostrar Aqui"}>
      <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        /* aplicamos flex direction */
        sx={{ flexDirection: { xs: 'column', sm: 'row'} }}
      >
  
        {/* cuando va la variante tambien va el component  */}
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
        <Typography marginLeft={2} >No encontramos una pagina para tu solicitud.</Typography>

      </Box>
    </ShopLayout>
  )

}

export default Custom404


