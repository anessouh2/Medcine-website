import Home from './components/home'
import './App.css'
import About from './components/about'
import { useEffect } from 'react'
import Whatwedo from './components/whatwedo'
import  AOS from "aos";
import "aos/dist/aos.css";
import Events from './components/events'
import Footer from './components/footer'

function App() {
 useEffect(() => {
  AOS.init()
 } , [])

  return (
    <section className='all'>
      <Home/>
      <About/>
      <Whatwedo/>
      <Events/>
      <Footer/>
    </section>
  )
}

export default App
