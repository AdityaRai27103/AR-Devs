import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Countact from './Countact'
import About from './About'
import Newtabs from './Newtabs'
import ServiceHero from './ServiceHero'
import ServiceBetter from './ServiceBetter'

function Servicepg() {
    return (
        <main className="main-page service-page">
            <Navbar />
            <ServiceHero />
            <Newtabs />
            <ServiceBetter />
            <About />
            <Countact />
            <Footer />
        </main>

    )
}

export default Servicepg