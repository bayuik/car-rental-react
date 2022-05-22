import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import WhyUs from "../../components/WhyUs";
import Testimonials from "../../components/Testimonials";
import Cta from "../../components/Cta";
import Faq from "../../components/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
