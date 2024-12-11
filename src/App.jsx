import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Indicator from './components/Indicator';
import Milestone from './components/Milestone';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ScrollTop from './components/ScrollTop';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <>
      <Indicator />
      <Header />
      <main>
        <Hero />
        <Milestone />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default App;
