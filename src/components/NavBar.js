
import React from "react"
import logo from "../assets/shared/logotext.png"
import dataTest from "../dataTest"

export default function NavBar() {

    const [menuElements, setMenuElements] = React.useState(dataTest.menuElements)
    const [mobileMenuVisible, setMobileMenuVisible] = React.useState(dataTest.mobileMenuVisible)

    console.log(menuElements)

    const menu = menuElements.map(menuElement => {
        return (
            <li className={menuElement.on ? "active" : ""} key={menuElement.id} >
                <a className="uppercase text-white letter-spacing-2" href={menuElement.url} onClick={() => handleClick(menuElement.id)}>
                    <span>{menuElement.id}</span>{menuElement.name}</a>
            </li >
        )
    })


    function handleClick(id) {
        console.log(id)
        setMenuElements(prevElement => {
            return prevElement.map((element) => {
                return element.id == id ? { ...element, on: !element.on } : { ...element, on: false }
            })
        })

    }
    function handleClickMobile() {
        setMobileMenuVisible(prev => {
            return !prev
        })
        console.log(mobileMenuVisible)
    }


    return (
        <header className="primary-header flex">
            <div>
                <img src={logo} alt="blockchaingamers.co logo" className="logo" />

            </div>
            <button className="mobile-nav-toggle " data-visible={mobileMenuVisible ? "true" : "false"} aria-controls="primary-navigation" onClick={handleClickMobile}><span className="sr-only" aria-expanded={mobileMenuVisible ? "true" : "false"}>Menu</span></button>
            <nav>
                <ul data-visible={mobileMenuVisible ? "true" : "false"} className="primary-navigation underline-indicators flex ff-sans-cond">
                    {menu}
                </ul>
            </nav>
            {/*<!-- my ::after is here -->*/}
        </header>

    )
}
