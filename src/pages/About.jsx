import { AboutCTA, AboutOurServices, AboutOurTeam, AboutServiceArea, AboutServiceBetter, AboutUSAbout, Countact, Footer, Navbar, Sliders } from "../components";


export default function About() {
    return (
        <div>
            <Navbar />
            <AboutUSAbout/>
            <Sliders/>
            <AboutOurServices/>
            <AboutServiceArea/>
            <AboutOurTeam/>
            <AboutServiceBetter/>
            <AboutCTA/>
            <Countact/>
            <Footer/>
        </div>
    )
} 