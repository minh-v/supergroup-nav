import React from "react"

const Hamburger = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="hamburger-menu group">
      <button class="group" onClick={() => setMenuOpen(!menuOpen)}>
        <div
          class={`w-40 h-3 my-8px transform transition ${
            menuOpen
              ? "bg-yellow rotate-45 translate-y-5 group-hover:bg-opacity-75 origin-center duration-150"
              : "bg-black duration-100 group-hover:scale-x-70 group-hover:duration-300"
          }`}
        ></div>
        <div
          class={`w-40 h-3 my-8px transform transition ${
            menuOpen
              ? "bg-yellow -rotate-45 -translate-y-1 group-hover:bg-opacity-75 origin-center duration-150"
              : "bg-black duration-100 origin-right group-hover:scale-x-70 group-hover:duration-300"
          }`}
        ></div>
      </button>
    </div>
  )
}

export default Hamburger
