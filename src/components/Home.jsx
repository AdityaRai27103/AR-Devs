import React from "react";
import './Home.css'

import Navbar from "./Navbar";
import Sliders from "./Sliders";
import Mainbanner from "./Mainbanner";
import Servicemodal from "./Servicemodal";
import Servicearea from "./Servicearea";
// import Producttab from "./Producttab";
import Newtabs from "./Newtabs";
import About from "./About";
import News from "./News";
import Feature from "./Feature";
import Countact from "./Countact";
import Testimonialslider from "./Testimonialslider";
import Ourwork from "./Ourwork";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="main-page homepage">
      <Navbar />
      <Mainbanner />
      <Sliders />
      <Servicemodal />
      <Servicearea />
      <Newtabs />
      <About />
      <Testimonialslider />
      <Ourwork />
      <News />
      <Feature />
      <Countact />
      <Footer />
    </main>
  );
}
