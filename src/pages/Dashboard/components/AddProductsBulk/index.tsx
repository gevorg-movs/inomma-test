import React from 'react'
import { Button, Stack, TextField } from '@mui/material'
import * as Yup from 'yup'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ActionButtons, ProductBox, SubmitButton } from './styled'
import { Delete } from '@mui/icons-material'
import { useAppDispatch } from '../../../../hooks/store'
import useAlert from '../../../../hooks/useAlert'
import { singleProductValidationSchema } from '../../../../features/products/productValidations'
import {
   changeProductDatesToISO,
   draftProduct,
} from '../../../../features/products/productUtils'
import { addBulkProducts } from '../../../../features/products/productSlice'

const validationSchema = Yup.object().shape({
   products: Yup.array().of(singleProductValidationSchema),
})

const initialValues = {
   products: [
      {
         ...draftProduct,
      },
   ],
}

const AddProductsBulk = () => {
   const dispatch = useAppDispatch()
   const { showSuccess } = useAlert()

   const { register, control, handleSubmit, setValue, reset } = useForm({
      defaultValues: initialValues,
      resolver: yupResolver(validationSchema),
   })

   const {
      fields: products,
      append,
      remove,
   } = useFieldArray({
      control,
      name: 'products',
   })

   const onSubmit = ({ products }) => {
      dispatch(addBulkProducts(products.map(changeProductDatesToISO)))

      showSuccess('The products have been successfully added')

      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Stack>
            {products.map((product, index) => (
               <ProductBox key={product.id}>
                  <Controller
                     render={({ fieldState: { error } }) => (
                        <TextField
                           label='Name'
                           variant='outlined'
                           {...register(`products.${index}.name`)}
                           helperText={error?.message ? error.message : ''}
                           error={Boolean(error)}
                        />
                     )}
                     name={`products.${index}.name`}
                     control={control}
                  />

                  <Controller
                     render={({ fieldState: { error } }) => (
                        <TextField
                           label='Price'
                           variant='outlined'
                           {...register(`products.${index}.price`)}
                           helperText={error?.message ? error.message : ''}
                           error={Boolean(error)}
                        />
                     )}
                     name={`products.${index}.price`}
                     control={control}
                  />

                  <Controller
                     render={({ fieldState: { error } }) => (
                        <TextField
                           label='Weight'
                           variant='outlined'
                           {...register(`products.${index}.weight`)}
                           helperText={error?.message ? error.message : ''}
                           error={Boolean(error)}
                        />
                     )}
                     name={`products.${index}.weight`}
                     control={control}
                  />
                  <Controller
                     render={({ field, fieldState: { error } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DatePicker
                              label='Start date'
                              value={field.value}
                              onChange={newValue =>
                                 setValue(
                                    `products.${index}.startDate`,
                                    newValue,
                                    {
                                       shouldValidate: true,
                                    }
                                 )
                              }
                              renderInput={params => (
                                 <TextField
                                    {...params}
                                    helperText={
                                       error?.message ? error.message : ''
                                    }
                                    error={Boolean(error)}
                                 />
                              )}
                           />
                        </LocalizationProvider>
                     )}
                     name={`products.${index}.startDate`}
                     control={control}
                  />

                  <Controller
                     render={({ field, fieldState: { error } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DatePicker
                              label='End date'
                              value={field.value}
                              onChange={newValue =>
                                 setValue(
                                    `products.${index}.endDate`,
                                    newValue,
                                    {
                                       shouldValidate: true,
                                    }
                                 )
                              }
                              renderInput={params => (
                                 <TextField
                                    {...params}
                                    helperText={
                                       error?.message ? error.message : ''
                                    }
                                    error={Boolean(error)}
                                 />
                              )}
                           />
                        </LocalizationProvider>
                     )}
                     name={`products.${index}.endDate`}
                     control={control}
                  />

                  {index !== 0 && (
                     <Button
                        variant='contained'
                        type='button'
                        color='error'
                        size={'large'}
                        onClick={() => remove(index)}>
                        <Delete />
                     </Button>
                  )}
               </ProductBox>
            ))}
         </Stack>

         <ActionButtons>
            <Button
               type='button'
               variant='contained'
               onClick={() => append({ ...draftProduct })}>
               Append new product
            </Button>
            <SubmitButton variant='contained' color='success' type='submit'>
               Save products
            </SubmitButton>
         </ActionButtons>
      </form>
   )
}

export default AddProductsBulk
