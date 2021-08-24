import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

  const Header = () => {

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
  <header className=" sticky top-0 z-50  font-bold bg-white ">
<section className="w-10/12 m-auto justify-between  items-center py-2 flex " >
  <figure>
  <GatsbyImage image={data.datoCmsLogo.logoSirius.gatsbyImageData} />  </figure> 
    <nav>
      <ul className="flex  text-white space-x-4 ">
      <li><Link to="/#school"  className=" text-siriusblue hover:text-red-500">Sirius School</Link></li>
      <li><Link to="/#formations"  className=" text-siriusblue hover:text-red-500">Les formations</Link></li>
      <li><Link to="/#témoignages"  className=" text-siriusblue hover:text-red-500"> Témoignages</Link></li>
      <li><Link to="/#inscription"  className=" text-siriusblue hover:text-red-500"> Inscription</Link></li>
      <li><Link to="/#contact"  className=" text-siriusblue hover:text-red-500"> contact</Link></li>


      </ul>
    </nav>
    <nav>
      <ul className="flex space-x-4 ">
      <li><a src="https://siriushub.be" target="_blank"  className=" text-siriusorange hover:text-red-500">Sirius Hub</a></li>
      <li><a src="https://www.possibles.org/" target="_blank"  className=" text-siriusorange hover:text-red-500">MDP</a></li>
      </ul>
    </nav>
    </section>
  </header>
)
}

export default Header
