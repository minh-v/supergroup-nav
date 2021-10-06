import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  //navbar hide on scroll
  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    //check if the user is scrolled
    if (currentScrollPos === 0) {
      console.log("back at top")
      setScrolled(false)
    }
    if (prevScrollpos > currentScrollPos) {
      //hidden
      document.getElementById("navbar").style.top = "0"
    } else {
      //hidden
      document.getElementById("navbar").style.top = "-100px"
      setScrolled(true)
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div class={`${menuOpen ? "bg-black" : "bg-yellow"}`}>
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header />
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
      <h1>l0l</h1>
    </div>
  )
}

export default App
