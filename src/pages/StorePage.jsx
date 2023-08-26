import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ECard from '../component/ECard'

export default function StorePage() {
  return (
    <>    
    <NavBar/>
    <div className="body-container">
      <div className="eq-conatainer">
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
       <ECard/>
      </div>
    </div>
    <Footer/>
    </>

  )
}
