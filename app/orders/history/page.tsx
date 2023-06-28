'use client'
import NextLink from 'next/link';

import { ShopLayout } from "@/app/components/layouts"
import { Chip, Grid, Typography,Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field:'id', headerName:'ID', width:100 },
  { field:'fullname', headerName:'Nombre Completo', width:300 },

  {
    field:'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell: ( params ) => (
        params.row.paid
          ? <Chip color="success" label='Pagada' variant="outlined"  / > 
          : <Chip color="error" label='No pagada' variant="outlined"  / > 
      )
  },
  {
    field:'Orden',
    headerName: 'Ver Orden',
    width: 200,
    sortable: false,
    renderCell: (params) => (
        <NextLink href={`/orders/${ params.row.id }`} passHref legacyBehavior  >
            <Link underline='always'>
              Ver Orden
            </Link>
        </NextLink>
      ) 
  },
];

const rows = [
  { id: 1, paid: true  ,fullname: 'Eric Espinoza' },
  { id: 2, paid: false  ,fullname: 'Melissa Flores' },
  { id: 3, paid: true  ,fullname: 'Hernando Vallejos' },
  { id: 4, paid: false  ,fullname: 'Raul Reyes' },
  { id: 5, paid: true  ,fullname: 'Daniel Espinoza' },
  { id: 6, paid: false ,fullname: 'Florencia Pozo' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del cliente"} >
      <Typography variant="h1" component={"h1"}>Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width:'100%' }}>
          
          <DataGrid 
            rows={ rows }
            columns={columns}
            pageSizeOptions={ [10] }
          />
        </Grid>  
      </Grid>  
    </ShopLayout>
  )
}

export default HistoryPage