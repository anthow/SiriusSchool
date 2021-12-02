import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook ,faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import {
  faPhoneAlt,
  faEnvelope

} from '@fortawesome/free-solid-svg-icons'

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
  return (
    <div className="w-full fixed sticky top-0 z-50">
      <article className=" p-1 text-white bg-headblue  ">
        <div className="w-9/12 flex justify-between m-auto">
          <section className=" flex space-x-4"> 
         <a href="tel:+32043770228" className="flex items-center space-x-2">
          <FontAwesomeIcon className="text-white" icon={faPhoneAlt} size="1x" />
          <span className="hidden md:block"> +32 04 377 02 28</span>
          </a>
          <a href="mailto:info@siriushub.be" className="flex items-center space-x-2">
          <FontAwesomeIcon className="text-white" icon={faEnvelope} size="1x" />
          <span className="hidden md:block"> info@siriushub.be</span>
            </a>
            </section>
          <section className=" flex space-x-4 items-center">
          <a href="https://www.facebook.com/siriushub" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

          <FontAwesomeIcon className="text-white" icon={faFacebook} size="1x" /></a>
          <a href="https://www.instagram.com/sirius.hub/" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

          <FontAwesomeIcon className="text-white" icon={faInstagram} size="1x" /></a>
          <a href="https://www.youtube.com/channel/UCHmnuhdDfdDtb1YT42mTRUg" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

          <FontAwesomeIcon className="text-white" icon={faYoutube} size="1x" /></a>
          </section>

        </div>
      </article>
      <nav className=" bg-white">
        <div className="flex items-center justify-between flex-wrap bg-teal-500 pb-2 md:py-6 m-auto  w-11/12 font-black ">
          <div className="flex items-baseline   -shrink-0 text-white ">
            <figure className="md:hidden">
              <Link to="/#"><GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} /></Link>  </figure>
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <section className="w-10/12 m-auto justify-between text-center items-center py-2 md:flex " >
              <Link to="/#"><figure className="hidden md:block">
                <GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} />  </figure> </Link>
              <nav>

                <ul className="md:flex  text-white md:space-x-8 ">
                  <li>
                    <div className="dropdown inline-block relative">

                      <button className=" font-semibold rounded flex md:inline-flex items-center">
                        <Link to="/#formations" className="  text-xl text-siriusorange hover:text-opacity-70">Les formations</Link>
                        <svg className="ml-2 fill-current text-siriusorange bg-white  h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                      </button>

                      <ul className="dropdown-menu absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-1">
                        <li className=""><Link to="/entreprenariat-numerique" className="  hover:text-siriusorange">Entrepreneuriat numérique et responsable </Link></li>
                        <li className=""><Link to="/communication-visuelle" className="  hover:text-siriusorange">Communication visuelle </Link></li>
                        <li className=""><Link to="/initiation-métiers-numérique" className=" hover:text-siriusorange">  Initiation aux métiers du numérique </Link></li>
                        <li className=""><Link to="/initiation-programmation" className=" hover:text-siriusorange">  Initiation à la programmation </Link></li>

                      </ul>
                    </div>
                  </li>


                  <a href="https://siriushub.be/all-news/" rel="noreferrer" target="_blank" className=" text-xl text-siriusorange hover:text-opacity-70">News</a>



                  <li><Link to="/#contact" className="text-xl text-siriusorange hover:text-opacity-70"> Contact</Link></li>

                  <li></li>
                </ul>
              </nav>
              <nav>
                <ul className="md:flex md:space-x-4 mt-10 md:mt-0 items-center  ">
                  <li> <Link to="/inscription">  <button className="bg-siriusorange text-white mb-4 md:mb-0 text-xl text-black hover:opacity-90  px-6 py-2 rounded"> S'inscrire</button></Link>
                  </li>

                </ul>
            </nav>
          </section>
        </div>
        </div>

      </nav>
    </div>)

}


export default Header
