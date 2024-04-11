import Banner from "./components/Banner";
import Nav from "./components/Nav"
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {


  return (
    <>
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
};

export default App;
