import React from 'react'
import {ScrollTrigger,SplitText} from "gsap/all"
import gsap from 'gsap/gsap-core'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <div className='flex-center '>
        <main>
            <Navbar/>
            <Hero/>        
            <Cocktails/>
        </main>
    </div>
  )
}

export default App