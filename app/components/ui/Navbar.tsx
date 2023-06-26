import NextLink from 'next/link'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


export const Navbar = () => {



    return (
    <AppBar>
        <Toolbar>
            <NextLink href="/" passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo </Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
            </NextLink>


            {/* ocupa todo el ancho al tener dos se comparte el espacio*/}
            <Box flex={ 1 } />

            {/* sx={{display=none}}  || block  basado en las dimensiones que ofrece material cambiar*/}
            {/* <Box sx={{display: 'none'}}> */}
            <Box sx={{display: { xs: 'none', sm: 'block' }}}>
                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref legacyBehavior>
                    <Link>
                        <Button>Niños</Button>
                    </Link>
                </NextLink>
            </Box>
          
            {/* todo flex */}
            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

            {/* Icono de carrito con 2 elementos temporal */}
            <NextLink href="/cart" passHref legacyBehavior>
                <Link>
                    <IconButton>
                        {/* para colocar los numeros arriba del carro */}
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>

            <Button>
                Menú 
            </Button>

        </Toolbar>
    </AppBar>
  )
}

