import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

  const [first, setFirst] = useState(true);

  const changeFirst = () => {
    if(!first){
      setFirst(true);
    }
    else{
      setFirst(false);
    }
  }

  return (
    <nav className="bg-sss border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full h-20 items-center flex">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt=""/>
          <span className="self-center text-2xl font-barlow font-semibold whitespace-nowrap text-mild">Harmony Analytics</span>
      </a>
    <div className="flex md:order-2">
      <div className="flex justify-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
      <Link type="button" to={ first ? "/hrc721/" : "/dashboard/" } className="py-2 px-4 text-l font-medium text-mild bg-spicy rounded border-r-2 border-emerald-700 hover:bg-spicy hover:text-white focus:z-10 focus:bg-emerald-900 focus:text-white peer-checked:bg-spicy" onClick={changeFirst}>
        { first ? "NFTs" : "HRC20"}
      </Link>
    </div>
    </div>     
    </div>


      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      </div>
      </div>
    </nav>
  )
}

export default Navbar;