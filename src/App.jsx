import Hero from "./components/Hero";
import Services from "./components/Services";
import Sobre from "./components/Sobre";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Ouvidoria from "./components/Ouvidoria";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <Sobre />
      <Testimonials />
      <Location />
      <Ouvidoria />
      <Contacts />
      
      <Footer />
    </div>
  );
}

export default App;
