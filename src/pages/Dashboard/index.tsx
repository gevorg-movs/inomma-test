import React, { SyntheticEvent, useState } from 'react'
import AddProductsBulk from './components/AddProductsBulk'
import AddSingleProduct from './components/AddSingleProduct'
import { Box, Divider, Tab, Tabs } from '@mui/material'
import TabPanel, { a11yProps } from '../../components/TabPanel'
import ProductsList from './components/ProductsList'
import { useAppSelector } from '../../hooks/store'
import { allProductsSelector } from '../../features/products/productSelectors'

const Admin = () => {
   const [activeTab, setActiveTab] = useState(0)
   const products = useAppSelector(allProductsSelector)

   const handleChange = (event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue)
   }

   return (
      <Box>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
               value={activeTab}
               onChange={handleChange}
               aria-label='basic tabs example'>
               <Tab label='Create one product' {...a11yProps(0)} />
               <Tab label='Create bulk product' {...a11yProps(1)} />
            </Tabs>
         </Box>
         <TabPanel value={activeTab} index={0}>
            <AddSingleProduct />
         </TabPanel>
         <TabPanel value={activeTab} index={1}>
            <AddProductsBulk />
         </TabPanel>

         <Divider sx={{ my: 5 }} />

         {!!products.length && <ProductsList />}
      </Box>
   )
}

export default Admin
