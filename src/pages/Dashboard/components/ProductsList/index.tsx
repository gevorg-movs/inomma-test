import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useAppDispatch, useAppSelector } from '../../../../hooks/store'
import { formatDate } from '../../../../utils/date'
import { Check, Close, Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { allProductsSelector } from '../../../../features/products/productSelectors'
import { removeProduct } from '../../../../features/products/productSlice'
import { isProductActive } from '../../../../features/products/productUtils'

const ProductsList = () => {
   const dispatch = useAppDispatch()
   const products = useAppSelector(allProductsSelector)

   const handleRemoveProduct = async (productId: string) => {
      dispatch(removeProduct(productId))
   }

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }}>
            <TableHead>
               <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Price</TableCell>
                  <TableCell align='right'>Weight</TableCell>
                  <TableCell align='right'>Start Date</TableCell>
                  <TableCell align='right'>End Date</TableCell>
                  <TableCell align='right'>Active</TableCell>
                  <TableCell align='right'>Actions</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {products.map(product => (
                  <TableRow key={product.id}>
                     <TableCell component='th' scope='row'>
                        {product.name}
                     </TableCell>
                     <TableCell align='right'>{product.price}</TableCell>
                     <TableCell align='right'>{product.weight}</TableCell>
                     <TableCell align='right'>
                        {formatDate(product.startDate)}
                     </TableCell>
                     <TableCell align='right'>
                        {formatDate(product.endDate)}
                     </TableCell>
                     <TableCell align='right'>
                        {isProductActive(product) ? (
                           <Check color='success' />
                        ) : (
                           <Close color='error' />
                        )}
                     </TableCell>
                     <TableCell align='right'>
                        <Button
                           type='button'
                           color='error'
                           onClick={() => handleRemoveProduct(product.id)}>
                           <Delete />
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default ProductsList
