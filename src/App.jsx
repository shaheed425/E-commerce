import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import glamour from './assets/glamour'
import './App.css'
import Home from './Pages/Home'
import Product from './Pages/Product'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <img src="glamour" alt="" /> */}
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/product' element={ <Product/>}/>
      </Routes>
      
    </>
    
  )
}

export default App
