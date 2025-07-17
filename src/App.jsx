import { useState } from 'react'
import Nava from './Nava'
import Home from './Home'
import Projects from './Projects';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black text-white'>
      
      <Nava />
      <Home />
         <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
