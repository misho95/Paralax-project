import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden ">
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
