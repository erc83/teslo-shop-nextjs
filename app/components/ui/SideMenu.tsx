import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"

export const SideMenu = () => {
  return (
    <Drawer   /* es parte del fondo de la pagina */
        open={ false }
        anchor='right'
        /* Para colocar elfondo borroso */
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width:250, paddingTop: 5 }}>
            <List>
                <ListItem>    
                    <Input
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label='toggle password visibility'>
                                    <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>

                
                <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Perfil'} /> 
                </ListItemButton>

                <ListItemButton>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mis Ordenes'} /> 
                </ListItemButton>

                {/* en tamaño pequeño que aparezcan estos 3 botones del navbar */}
                <ListItemButton sx={{ display: { xs:'', sm:'none' }   }}>
                    <ListItemIcon>
                        <MaleOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Hombres'}/>
                </ListItemButton>
                <ListItemButton sx={{ display: { xs:'', sm:'none' }   }}>
                    <ListItemIcon>
                        <FemaleOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Mujeres'}/>
                </ListItemButton>
                <ListItemButton sx={{ display: { xs:'', sm:'none' }   }}>
                    <ListItemIcon>
                        <EscalatorWarningOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Niños'}/>
                </ListItemButton>
                

                <ListItemButton>
                    <ListItemIcon>
                        <VpnKeyOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Ingresar'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LoginOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Salir'}/>
                </ListItemButton>

                {/* ADMIN */}

                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItemButton>
                    <ListItemIcon>
                        <CategoryOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Productos'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined />
                    </ListItemIcon>    
                    <ListItemText primary={'Ordenes'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AdminPanelSettings />
                    </ListItemIcon>    
                    <ListItemText primary={'Usuarios'}/>
                </ListItemButton>

            </List>
        </Box>
    </Drawer>
  )
}

