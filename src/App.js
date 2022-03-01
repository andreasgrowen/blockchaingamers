import './index.css';
import React from "react"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Metaverse from "./components/Metaverse"
import dataTest from "./dataTest"

function App() {
  const [menuElements, setMenuElements] = React.useState(dataTest.menuElements)

  const showComponent = menuElements.map(element => {
    if (element.on === true) {
      return element.name
    } else {
      return ""
    }

  })
  function handleClick(id) {
    console.log(id)
    setMenuElements(prevElement => {
      return prevElement.map((element) => {
        return element.id === id ? { ...element, on: !element.on } : { ...element, on: false }
      })
    })

  }

  return (
    <section className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="App">
        <NavBar
          menuElements={menuElements}
          handleClick={handleClick}
        />
        {showComponent.includes("Home") && <Home
          menuElements={menuElements}
          handleClick={handleClick}
        />}

        {showComponent.includes("Home") === false && <Metaverse />}
      </div >
    </section>

  );
}

export default App;
