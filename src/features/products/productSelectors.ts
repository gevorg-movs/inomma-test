import { RootState } from '../../store'
import { isProductActive } from './productUtils'

export const activeProductsSelector = ({ products }: RootState) => {
   return products.data.filter(product => isProductActive(product))
}

export const allProductsSelector = ({ products }: RootState) => products.data
