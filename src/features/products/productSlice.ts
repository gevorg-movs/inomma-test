import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductsState } from './productTypes'
import { v4 as uuid } from 'uuid'

const initialState: IProductsState = {
   data: [
      {
         id: uuid(),
         name: 'Product 1',
         weight: 1500,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-04T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 2',
         weight: 1000,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-03T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 3',
         weight: 1000,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-04T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 4',
         weight: 1000,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-04T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 5',
         weight: 500,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-08T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 6',
         weight: 500,
         price: 1,
         startDate: '2022-10-01T16:02:54.883Z',
         endDate: '2022-10-06T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 7',
         weight: 400,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2022-11-04T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 8',
         weight: 200,
         price: 1,
         startDate: '2021-11-01T16:02:54.883Z',
         endDate: '2021-11-04T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 9',
         weight: 2500,
         price: 1,
         startDate: '2022-11-01T16:02:54.883Z',
         endDate: '2023-11-14T16:02:54.883Z',
      },
      {
         id: uuid(),
         name: 'Product 10',
         weight: 2500,
         price: 1,
         startDate: '2020-11-01T16:02:54.883Z',
         endDate: '2023-11-20T16:02:54.883Z',
      },
   ],
}

export const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      addSingleProduct: (state, { payload }: PayloadAction<IProduct>) => {
         state.data.push({
            ...payload,
            id: uuid(),
         })
      },
      addBulkProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
         state.data = [
            ...state.data,
            ...payload.map(product => ({ ...product, id: uuid() })),
         ]
      },
      removeProduct: (state, { payload }: PayloadAction<string>) => {
         state.data = state.data.filter(product => product.id !== payload)
      },
   },
})

export const { addSingleProduct, addBulkProducts, removeProduct } =
   productSlice.actions
