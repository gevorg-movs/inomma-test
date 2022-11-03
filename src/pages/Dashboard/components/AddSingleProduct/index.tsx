import React from 'react'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { singleProductValidationSchema } from '../../../../features/products/productValidations'
import { InputRow } from './styled'
import {
   changeProductDatesToISO,
   draftProduct,
} from '../../../../features/products/productUtils'
import { addSingleProduct } from '../../../../features/products/productSlice'
import { useAppDispatch } from '../../../../hooks/store'
import useAlert from '../../../../hooks/useAlert'

const AddSingleProduct = () => {
   const dispatch = useAppDispatch()
   const { showSuccess } = useAlert()

   const {
      register,
      watch,
      handleSubmit,
      setValue,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: draftProduct,
      resolver: yupResolver(singleProductValidationSchema),
   })

   const onSubmit = productData => {
      dispatch(addSingleProduct(changeProductDatesToISO(productData)))

      showSuccess('The product has been successfully added')

      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <InputRow>
            <TextField
               label='Name'
               variant='outlined'
               {...register('name')}
               helperText={errors?.name?.message ? errors?.name.message : ''}
               error={Boolean(!!errors?.name)}
            />

            <TextField
               label='Price'
               variant='outlined'
               {...register('price')}
               helperText={errors?.price?.message ? errors?.price.message : ''}
               error={Boolean(!!errors?.price)}
            />
            <TextField
               label='Weight'
               variant='outlined'
               {...register('weight')}
               helperText={
                  errors?.weight?.message ? errors?.weight.message : ''
               }
               error={Boolean(!!errors?.weight)}
            />
         </InputRow>

         <InputRow>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DatePicker
                  label='Start date'
                  value={watch('startDate')}
                  onChange={newValue =>
                     setValue('startDate', newValue, {
                        shouldValidate: true,
                     })
                  }
                  renderInput={params => (
                     <TextField
                        {...params}
                        helperText={
                           errors?.startDate?.message
                              ? errors?.startDate.message
                              : ''
                        }
                        error={Boolean(!!errors?.startDate)}
                     />
                  )}
               />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DatePicker
                  label='End date'
                  value={watch('endDate')}
                  onChange={newValue =>
                     setValue('endDate', newValue, {
                        shouldValidate: true,
                     })
                  }
                  renderInput={params => (
                     <TextField
                        {...params}
                        helperText={
                           errors?.endDate?.message
                              ? errors?.endDate.message
                              : ''
                        }
                        error={Boolean(!!errors?.endDate)}
                     />
                  )}
               />
            </LocalizationProvider>
         </InputRow>

         <Button variant='contained' color='success' type='submit'>
            Save
         </Button>
      </form>
   )
}

export default AddSingleProduct
