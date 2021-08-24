import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


    const NavForm = () => (

    <>
    <header className="w-12/12 m-auto  ">
<nav>
      <ul className="flex justify-center flex-wrap text-center text-gray-400  text-sm w-10/12 mt-2 pt-2 m-auto text-white space-x-4 border-t-2 ">
      <li><Link to="/entreprenariat-numerique"  className="  hover:text-red-500">Entrepreneuriat numérique et responsable </Link></li>
      <li><Link to="/communication-visuelle"  className="  hover:text-red-500">Communication visuelle </Link></li>
      <li><Link to="/initiation-métiers-numérique"  className=" hover:text-red-500">  Initiation aux métiers du numérique </Link></li>
      <li><Link to="/initiation-programmation"  className=" hover:text-red-500">  Initiation à la programmation </Link></li>


      </ul>
    </nav>
        </header>

</>
)


export default NavForm