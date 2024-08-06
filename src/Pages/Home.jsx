import React from 'react'
import NavBar from '../Components/NavBar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

export default function Home() {
  return (
    <>
    <NavBar/>
    <CategoryMenu/>
    <FoodItems/>
    <Cart/>
    </>
  )
}
