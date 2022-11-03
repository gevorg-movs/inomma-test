import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { OutletBox } from './styled'

const Layout = () => {
   return (
      <Grid container spacing={5} marginTop={2}>
         <Grid item lg={3}>
            <Sidebar />
         </Grid>
         <Grid item lg={9} rowSpacing={2}>
            <OutletBox>
               <Outlet />
            </OutletBox>
         </Grid>
      </Grid>
   )
}

export default Layout
