import React from "react"
import Logo from "./Logo"
import Hamburger from "./Hamburger"

//is scrolled
//transform -rotate-45 translate-x-1 -translate-y-1
//transform rotate-45 translate-x-2
const Navbar = ({ scrolled, menuOpen, setMenuOpen }) => {
  return (
    <div>
      <nav
        id="navbar"
        className={`navbar flex items-center justify-between fixed flex-nowrap top-0 h-24 px-16 transform transition-all ease-out ${
          scrolled ? " border-b-2 border-black" : ""
        } ${menuOpen ? "bg-black" : "bg-yellow"}`}
      >
        <a href="#top">
          <Logo menuOpen={menuOpen} />
        </a>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>
    </div>
  )
}

export default Navbar
