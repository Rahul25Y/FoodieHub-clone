import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Sucess from './Pages/Success';
import Error from './Pages/Error';
import ProtectedRoute from './Components/ProtectedRoute';
export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<ProtectedRoute element={<Sucess/>}/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}
