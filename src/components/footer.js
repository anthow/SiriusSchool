import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className=" w-12/12 mt-20 pt-8 bg-white text-siriusblue">
    <section className="w-10/12 m-auto items-center flex flex-col md:flex-row justify-evenly  " >
      <article>
        <h4> Sirius School</h4>
        <p> Avenue Rogier 19</p>
        <p> 4000 Liège BE</p>
        <p>+32 4377 02 28</p>
        <p> info@siriushub.be</p>
        <div className="flex mt-4 justify-around">
          <a href="https://www.facebook.com/siriushub" rel="noreferrer" target="_blank"> <StaticImage src="../images/facebook.png" alt=" bouton facebook"
            width={30}
            height={30} />
          </a>

          <a href="https://www.instagram.com/sirius.hub/" rel="noreferrer" target="_blank"> <StaticImage src="../images/instagram.png" alt=" bouton instagram"
            width={30}
            height={30} />
          </a>

          <a href="https://www.youtube.com/channel/UCHmnuhdDfdDtb1YT42mTRUg" rel="noreferrer" target="_blank"> <StaticImage src="../images/youtube.png" alt=" bouton youtube"
            width={30}
            height={30} />
          </a>

     

        </div>
        <div className="flex mt-4">
        </div>
      </article>
      <StaticImage
        src="../images/dbsf.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={125}
      />

      <StaticImage
        src="../images/MdP.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={70}
      />








    </section>

    <p className=" mt-10 text-center">SiriusSchool 2021</p>

  </footer>
)


export default Footer
