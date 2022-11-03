import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/store'
import Product from './components/Product'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { getRandomByField } from '../../utils/arrays'
import { IProduct } from '../../features/products/productTypes'
import { activeProductsSelector } from '../../features/products/productSelectors'

const Products = () => {
   const [products, setProducts] = useState<IProduct[]>([])
   const [displayCount, setDisplayCount] = useState(5)
   const activeProducts = useAppSelector(activeProductsSelector)

   const handleShowAllProducts = () => {
      fetchRandomProduct(activeProducts.length)
   }

   const fetchRandomProduct = displayCount => {
      const products = getRandomByField(activeProducts, 'weight', displayCount)
      setProducts(products)
      setDisplayCount(products.length)
   }

   useEffect(() => {
      fetchRandomProduct(displayCount)
   }, [activeProducts])

   return (
      <>
         {products.length ? (
            <Box>
               <Typography fontWeight='bold' variant='h6' marginBottom={2}>
                  Showed {displayCount} from {activeProducts.length}
               </Typography>

               <Grid container spacing={3} marginBottom={3}>
                  {products.map(product => (
                     <Grid key={product.id} item lg={4}>
                        <Product key={product.id} product={product} />
                     </Grid>
                  ))}
               </Grid>
               <Stack alignItems='center'>
                  {displayCount !== activeProducts.length && (
                     <Button
                        variant='contained'
                        disabled={displayCount === activeProducts.length}
                        onClick={handleShowAllProducts}>
                        Show all products
                     </Button>
                  )}
               </Stack>
            </Box>
         ) : (
            <Typography variant='h4' textAlign='center'>
               There are no active products yet
            </Typography>
         )}
      </>
   )
}

export default Products
