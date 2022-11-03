import * as Yup from 'yup'

export const singleProductValidationSchema = Yup.object().shape({
   name: Yup.string().required('Name is required'),
   price: Yup.number()
      .required('Price is required')
      .nullable()
      .typeError('Invalid type'),
   weight: Yup.number()
      .required('Weight is required')
      .nullable()
      .typeError('Invalid type'),
   startDate: Yup.date()
      .required('Start date is required')
      .nullable()
      .typeError('Invalid type'),
   endDate: Yup.date()
      .required('End date is required')
      .nullable()
      .typeError('Invalid type')
      .min(Yup.ref('startDate'), "End date can't be before start date"),
})
