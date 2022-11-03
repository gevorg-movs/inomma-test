import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface TabPanelProps {
   index: number
   value: number
   children?: ReactNode
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => {
   return (
      <div
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}>
         {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
      </div>
   )
}

export default TabPanel

export const a11yProps = (index: number) => {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}
