import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Link from '../../Link'
import MenuIcon from '@mui/icons-material/Menu'

const links = [
   {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <MenuIcon />,
   },
   {
      name: 'Products',
      path: '/',
      icon: <MenuIcon />,
   },
]

const Sidebar = () => {
   return (
      <List>
         {links.map(link => (
            <Link to={link.path} key={link.path}>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>{link.icon}</ListItemIcon>
                     <ListItemText primary={link.name} />
                  </ListItemButton>
               </ListItem>
            </Link>
         ))}
      </List>
   )
}

export default Sidebar
