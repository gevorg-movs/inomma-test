import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Layout from './components/Layout'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route path='/' element={<Products />} />
            <Route path='dashboard' element={<Dashboard />} />
         </Route>
      </Routes>
   )
}

export default App
