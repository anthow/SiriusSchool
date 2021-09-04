import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className=" w-12/12 mt-20 pt-8 bg-white text-siriusblue">
<section className="w-10/12 m-auto flex justify-evenly  " >
    <article>
      <h4> Sirius School</h4>
      <p> Avenue Rogier 19</p>
      <p> 4000 Liège BE</p>
      <p>+32 4377 02 28</p>
      <p> info@siriushub.be</p>
      <div className="flex mt-4">
      </div>
    </article>
    <StaticImage
      src="../images/dbsf.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={100}
    />

<StaticImage
      src="../images/MdP.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={100}
    />








    </section>

    <p className=" mt-10 text-center">SiriusSchool 2021</p>

  </footer>
)


export default Footer
