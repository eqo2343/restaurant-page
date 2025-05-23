import React from 'react'
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import MenuPage from './pages/MenuPage'
import GiftCards from './pages/GiftCards'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/menu' element={<MenuPage />} />
  <Route path='gift-cards' element={<GiftCards />} />
  </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App
