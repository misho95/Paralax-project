import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import { Element, animateScroll as scroll } from "react-scroll";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden relative">
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <button
        onClick={scrollToTop}
        className="absolute right-5 bottom-5 p-3 bg-[#359381] text-white shadow-sm"
      >
        Jump To Top
      </button>
    </div>
  );
}

export default App;
