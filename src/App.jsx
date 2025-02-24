import { BrowserRouter } from "react-router-dom";

import {Contact,   Experience, Education, Hero, Navbar, Tech,  StarsCanvas, Content, Footer  } from "./components";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className='relative z-1 bg-primary'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <Navbar />
          <Hero />

        </div>
        <Content />
        <Education />
        <Experience />
        <Tech />
        <div className='relative z-0'>

          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
