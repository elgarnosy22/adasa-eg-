import { useState } from 'react'
import Api from './posts.json'
import './App.css'
import Frist from './Components/Home/Frist'
import Navbar from './Components/Navbar/Navbar'
import Second from './Components/Home/Second'
import Third from './Components/Home/Third'
import Fourth from './Components/Home/Fourth'
import Fifth from './Components/Home/Fifth'
import Footer from './Components/Footer/Footer';
import Title from './Components/Main Page/Title'
import MainPage from './Components/Main Page/MainPage'
import One from './Components/Contact/One'
import Two from './Components/Contact/Two'
import TeamSection from './Components/Contact/TeamSection'
import CallToAction from './Components/Contact/CallToAction'
import ArticleComponents from './Components/ArticleComponents/ArticleComponents'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
let router = createBrowserRouter([
  {
    path:'',element:<Layout/>,children:[
      {index:true , element:<Home/>},
      {path:"blog" , element:<MainPage/> , children:[{path:'*' , element:<NotFound/>}]},
      {path:'blog/:slug' , element:<ArticleComponents/> , children:[{path:'*' , element:<NotFound/>}]},
      {path:'about' , element:<Contact/>},
      {path:'*' , element:<NotFound/>}
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
