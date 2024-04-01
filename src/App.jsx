import Banner from "./components/Banner";
import Nav from "./components/Nav"
import About from "./components/About";

function App() {


  return (
    <>
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
      </div>
    </>
  );
};

export default App;
