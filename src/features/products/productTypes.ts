export interface IProductsState {
   data: IProduct[]
}

export interface IDraftProduct {
   name: string
   price: number | null
   weight: number | null
   startDate: Date | null
   endDate: Date | null
}

export interface IProduct {
   id: string
   name: string
   price: number
   weight: number
   startDate: string
   endDate: string
}
