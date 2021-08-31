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
      <li><Link to="/#school"  className=" text-siriusblue hover:text-red-500">Sirius School</Link></li>
      <li><Link to="/#formations"  className=" text-siriusblue hover:text-red-500">Les formations</Link></li>
      <li><Link to="/#témoignages"  className=" text-siriusblue hover:text-red-500"> Témoignages</Link></li>
      <li><Link to="/#inscription"  className=" text-siriusblue hover:text-red-500"> Inscription</Link></li>
      <li><Link to="/#contact"  className=" text-siriusblue hover:text-red-500"> Contact</Link></li>


      </ul>
    </nav>
    <nav>
      <ul className="md:flex md:space-x-4 mt-10 md:mt-0 ">
      <li><a src="https://siriushub.be" target="_blank"  className=" text-siriusorange hover:text-red-500">Sirius Hub</a></li>
      <li><a src="https://www.possibles.org/" target="_blank"  className=" text-siriusorange hover:text-red-500">MDP</a></li>
      </ul>
    </nav>
    </section>
  </div>
</nav>
)
}


export default Header
