import { Navbar } from "../components";
import { FaqHero } from '../components';
import { FaqHero2 } from '../components';
import { Footer } from '../components'
import { ServiceBetter } from '../components'
import { Countact } from '../components'
import { FaqCta } from '../components'

export default function Home() {
    return (
        <main class="main-page career-page">
            <Navbar />
            <FaqHero />
            <FaqHero2 />
            <ServiceBetter />
            <FaqCta />
            <Countact />
            <Footer />
        </main>
    )
} 