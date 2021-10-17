import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook ,faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';




const Footer = () => (
  <footer className="  mt-20 ">
    <section className="w-12/12 py-6 text-white  bg-headblue   " >
      <div className="w-10/12  m-auto items-center flex flex-col md:flex-row justify-between ">
      <article className="flex space-x-8 items-center">
        <div className="pr-16 border-r-2 border-white">
        <h4 className="text-xl font-black mb-2"> Sirius School</h4>
        <p> Avenue Rogier 19</p>
        <p> 4000 Liège BE</p>
        <p>+32 4377 02 28</p>
        <p> info@siriushub.be</p>
       </div>
      <div className="flex flex-col items-center space-y-2">
      <a href="https://www.facebook.com/siriushub" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

<FontAwesomeIcon className="text-white text-2xl" icon={faFacebook} size="1x" /></a>
<a href="https://www.instagram.com/sirius.hub/" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

<FontAwesomeIcon className="text-white text-2xl" icon={faInstagram} size="1x" /></a>
<a href="https://www.youtube.com/channel/UCHmnuhdDfdDtb1YT42mTRUg" rel="noreferrer" target="_blank" className=" hover:text-opacity-70">

<FontAwesomeIcon className="text-white text-2xl" icon={faYoutube} size="1x" /></a>
      </div>
      </article>

      <article className="flex items-center space-x-20">
      <StaticImage
        src="../images/mdp_transparent.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={100}
      />


      <StaticImage
        src="../images/Logo-DBSF transparent.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={83}
      />

     
      </article>
</div>







    </section>
<section className="w-12/12 py-2 bg-footerblue text-white">
  <article className="  w-10/12 m-auto">
    <p className="text-sm"> @SiriusSchool 2021</p>
    </article>
</section>
  </footer>
)


export default Footer
