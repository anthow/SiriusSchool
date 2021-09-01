import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

  const Header = () => {
    const [isExpanded, toggleExpansion] = useState(false)
  const data = useStaticQuery(graphql`
  {
    datoCmsLogo {
      logoSirius {
        gatsbyImageData(
          width: 150
          )
      }
    }
  }
`) 
return(
  <nav className=" fixed flex items-center justify-between flex-wrap bg-teal-500 p-6  sticky top-0 z-50  font-bold bg-white">

  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <figure className="md:hidden">
  <GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} />  </figure> 
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
  </div>
  <div className="block lg:hidden">
    <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
<section className="w-10/12 m-auto justify-between text-center items-center py-2 md:flex " >
<figure className="hidden md:block">
  <GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} />  </figure> 
    <nav>
      <ul className="md:flex  text-white md:space-x-4 ">
      <li><Link to="/#school"  className=" text-siriusorange hover:text-opacity-70">Sirius School</Link></li>
      <li><Link to="/#formations"  className=" hidden md:block text-siriusorange hover:text-opacity-70">Les formations</Link></li>
      <li className="md:hidden">
      <button type="button" className=" text-siriusorange hover:text-opacity-70 inline-flex md:hidden justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
      id="menu-button" aria-expanded="true" aria-haspopup="true">
      Formations
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
        </button>
        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

    </div>
    </div>
        </li>  
      <li><Link to="/#témoignages"  className=" text-siriusorange hover:text-opacity-70"> Témoignages</Link></li>
      <li><Link to="/#inscription"  className=" text-siriusorange hover:text-opacity-70"> Inscription</Link></li>
      <li><Link to="/#contact"  className=" text-siriusorange hover:text-opacity-70"> Contact</Link></li>


      </ul>
    </nav>
    <nav>
      <ul className="md:flex md:space-x-4 mt-10 md:mt-0 ">
      <li><a src="https://siriushub.be" target="_blank"  className=" text-siriusblue hover:text-opacity-70">Sirius Hub</a></li>
      <li><a src="https://www.possibles.org/" target="_blank"  className=" text-siriusblue hover:text-opacity-70">MDP</a></li>
      </ul>
    </nav>
    </section>
  </div>
</nav>
)
}


export default Header
                