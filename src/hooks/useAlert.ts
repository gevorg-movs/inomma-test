import Swal, { SweetAlertOptions } from 'sweetalert2'

import withReactContent from 'sweetalert2-react-content'

const useAlert = () => {
   const SwalAlert = withReactContent(Swal)

   const showSuccess = async (text: string, options?: SweetAlertOptions) => {
      return SwalAlert.fire({
         text,
         title: 'Success',
         icon: 'success',
         ...options,
      })
   }

   return { showSuccess }
}

export default useAlert
