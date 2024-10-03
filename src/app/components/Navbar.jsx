import React from 'react'
import NavbarComp from './NavbarComp'

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-row gap-16 justify-center items-center text-xl">
            <NavbarComp title="Trending" param='fetchTrending'/>
            <NavbarComp title="Top Rated" param='fetchTopRated'/>
        </div>
    </div>
  )
}

export default Navbar