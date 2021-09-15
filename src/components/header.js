import React, { useState } from "react"
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

  <div className="flex items-baseline   -shrink-0 text-white mr-6">
  <figure className="md:hidden">
  <Link to="/#">"<GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} /></Link>  </figure> 
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
  </div>
  <div className="block lg:hidden">
    <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-black">
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
    <li>
    <div class="dropdown inline-block relative">

      <button class=" font-semibold rounded flex md:inline-flex items-center">
        <Link to="/#formations"  className="  text-siriusorange hover:text-opacity-70">Les formations</Link>
        <svg class="ml-2 fill-current bg-siriusorange h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
</button>

  <ul class="dropdown-menu absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-1">
    <li class=""><Link to="/entreprenariat-numerique"  className="  hover:text-siriusorange">Entrepreneuriat numérique et responsable </Link></li>
    <li class=""><Link to="/communication-visuelle"  className="  hover:text-siriusorange">Communication visuelle </Link></li>
    <li class=""><Link to="/initiation-métiers-numérique"  className=" hover:text-siriusorange">  Initiation aux métiers du numérique </Link></li>
    <li class=""><Link to="/initiation-programmation"  className=" hover:text-siriusorange">  Initiation à la programmation </Link></li>

  </ul>
</div>
</li>
      <li><Link to="/#témoignages"  className=" text-siriusorange hover:text-opacity-70"> Témoignages</Link></li>
      <li><Link to="/#contact"  className=" text-siriusorange hover:text-opacity-70"> Contact</Link></li>

<li></li>
      </ul>
    </nav>
    <nav>
      <ul className="md:flex md:space-x-4 mt-10 md:mt-0 items-center  ">
        <li> <Link to="/inscription">   <button className="bg-siriusorange text-white mb-4 md:mb-0 text-lg text-bold hover:opacity-90  p-2 rounded"> s'inscrire</button></Link>
</li>
      <li><a href="https://siriushub.be"  rel="noreferrer" target="_blank"  className=" text-siriusblue hover:text-opacity-70">Sirius Hub</a></li>
      <li><a href="https://www.possibles.org/" rel="noreferrer"                 target="_blank"  className=" text-siriusblue hover:text-opacity-70">Le Monde des Possibles</a></li>
      </ul>
    </nav>
    </section>
  </div>
</nav>
)
}


export default Header
                