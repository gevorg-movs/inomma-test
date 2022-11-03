import React from 'react'
import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import { IProduct } from '../../../features/products/productTypes'

interface ProductProps {
   product: IProduct
}

const Product: FC<ProductProps> = ({ product }) => {
   return (
      <Card>
         <CardMedia
            component='img'
            height='230'
            image='http://mockupplanet.com/wp-content/uploads/2020/06/Free-Cardboard-Square-Product-Box-Mockup-Design.jpg'
            alt='product'
         />
         <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
               {product.name}
            </Typography>
            <Typography>Price: {product.weight}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>Weight: {product.weight}</Typography>
         </CardContent>
      </Card>
   )
}

export default Product
