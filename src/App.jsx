import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./componentss/Navbar";
import Hero from "./componentss/Hero";
import About from "./componentss/About";
import Services from "./componentss/Services";
import WhyChoose from "./componentss/WhyChoose";
import AppointmentCTA from "./componentss/AppointmentCTA";
import Contact from "./componentss/Contact";
import AppointmentForm from "./componentss/AppointmentForm";
import Footer from "./componentss/Footer";
import WhatsAppButton from "./componentss/WhatsAppButton";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
<WhyChoose />
<AppointmentCTA />
<Contact />
<AppointmentForm />
<Footer />
 <WhatsAppButton />
    </>
  );
}

export default App;