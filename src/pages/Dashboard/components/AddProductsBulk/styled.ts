import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

export const ProductBox = styled(Box)(() => ({
   display: 'flex',
   gap: '15px',
   marginBottom: '15px',
   alignItems: 'start',
}))

export const SubmitButton = styled(Button)(() => ({
   marginLeft: '15px',
}))

export const ActionButtons = styled(Box)(() => ({
   marginTop: '15px',
   marginBottom: '15px',
}))
