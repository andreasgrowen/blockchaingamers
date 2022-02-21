import './index.css';
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <section className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>


      <div className="App">
        <NavBar />
        <Home />
      </div >
    </section>

  );
}

export default App;
