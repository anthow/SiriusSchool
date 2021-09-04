import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


    const NavForm = () => (

    <>
    <header className="w-10/12 m-auto hidden md:block  ">
<nav className="flex items-center justify-between ">
      <ul className="flex justify-center flex-wrap text-center text-gray-400  text-sm w-10/12  m-auto text-white space-x-4  ">
      <li><Link to="/entreprenariat-numerique"  className="  hover:text-siriusorange">Entrepreneuriat numérique et responsable </Link></li>
      <li><Link to="/communication-visuelle"  className="  hover:text-siriusorange">Communication visuelle </Link></li>
      <li><Link to="/initiation-métiers-numérique"  className=" hover:text-siriusorange">  Initiation aux métiers du numérique </Link></li>
      <li><Link to="/initiation-programmation"  className=" hover:text-siriusorange">  Initiation à la programmation </Link></li>

      </ul>
    <button className="bg-siriusorange text-white text-lg text-bold hover:opacity-90  p-2 rounded"> s'inscrire</button>

    </nav>
        </header>

</>
)


export default NavForm