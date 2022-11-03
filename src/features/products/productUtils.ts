import { IDraftProduct, IProduct } from './productTypes'
import dayjs from 'dayjs'

export const draftProduct: IDraftProduct = {
   name: '',
   price: null,
   weight: null,
   startDate: null,
   endDate: null,
}

export const changeProductDatesToISO = productData => ({
   ...productData,
   startDate: productData.startDate.toISOString(),
   endDate: productData.endDate.toISOString(),
})

export const isProductActive = (product: IProduct) => {
   const currentDate = dayjs()
   const startDate = dayjs(product.startDate)
   const endDate = dayjs(product.endDate)

   return currentDate.isAfter(startDate) && currentDate.isBefore(endDate)
}
