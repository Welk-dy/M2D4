import {FC} from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Portofolio from "../../components/Portofolio";
import Slide from "../../components/Slide";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Slide />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;