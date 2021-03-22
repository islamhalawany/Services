import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoScetion from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {homeObjOne} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Services />
        <InfoScetion {...homeObjOne}/>
        <Footer />
            
        </>
    )
}

export default Home
