import { Navbar } from "../components"
import { Footer } from "../components"
import Careerhero from "../components/Careerhero"
import { CareerCta } from "../components"
import { CarrerOurteam } from "../components"
import { Countact } from "../components"
import { ServiceBetter } from "../components"
import { CareerServices } from '../components'


export default function Career() {
    return (
        <div>
            <Navbar />
            <Careerhero />
            <CareerServices />
            <CareerCta />
            <ServiceBetter />
            <CarrerOurteam />
            <Countact />
            <Footer />
        </div>
    )
} 