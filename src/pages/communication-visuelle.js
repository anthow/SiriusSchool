import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendar,
    faEuroSign,

} from '@fortawesome/free-solid-svg-icons'

const CommunicationPage = ({ data }) => (
    <Layout>
    <Seo title="Home" />
    <section className=" mt-8 md:mt-20 w-10/12 m-auto place-content-top items-center auto-cols-fr auto-rows-min md:gap-y-20 md:gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid ">
<figure>
<GatsbyImage className="mb-4 md:mb-0" image={data.datoCmsFormationDeux.imageFormation.gatsbyImageData} alt={data.datoCmsFormationDeux.imageFormation.gatsbyImageData}/>
</figure>
<article className=" h-full ">
<h3 className="mb-5   text-3xl font-black  text-siriusblue" >{data.datoCmsFormationDeux.titreFormation} </h3>
<div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.informationsGNRales }}></div>
<div className="md:flex  mt-8 md:space-x-8">
            <div className="flex  space-x-2 ">
              <FontAwesomeIcon className="text-siriusblue" icon={faCalendar} size="1x" /><p className="text-siriusblue text-sm"> {data.datoCmsFormationDeux.durE} </p>
            </div>  <div className=" flex space-x-2">

              <FontAwesomeIcon className="text-siriusblue" icon={faEuroSign} size="1x" /><p className="text-siriusblue text-sm"> gratuit </p>
            </div>
            <div className=" flex space-x-2">

              <p className="text-siriusblue text-sm"> Niveau: {data.datoCmsFormationDeux.niveau}</p>
            </div>
          </div>

          <h3 className="mb-5 mt-8  text-siriusblue text-2xl font-black" > Public cible</h3>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.publicCible }}></div>
</article>
</section> 
<section className="w-10/12 m-auto mt-10"> 


    </section>
    <h3 className="mb-5 mt-20  text-3xl  md:text-5xl w-10/12 m-auto font-black  text-siriusblue" >Le programme </h3>
    <section className="mt-8 md:mt-20 w-10/12 m-auto  auto-cols-fr auto-rows-min gap-y-20 gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
        
    <article className="border-formationdeux border mb-8 md:mb-0 h-full p-4 rounded">
    <h4 className="mb-10  text-center text-xl text-formationdeux font-black">La formation</h4>
    <div className="listform pl-4" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.programme }}></div>
</article>
<article className="  bg-siriusblue p-4 text-white  h-full rounded">
    <h4 className="mb-10 text-center  text- text-xl font-black"> Les softkills</h4>
    <div className="listform pl-4" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.softkills }}></div>
</article>

        </section> 
        <section className="w-10/12 m-auto mt-20"> 
        <h3 className="mb-5 text-siriusblue  text- text-2xl font-black" > Conditions d'admission</h3>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.condition }}></div>



    </section>
    <section className="w-10/12 m-auto mt-20"> 
        <h3 className="mb-5 text-siriusblue  text- text-2xl font-black" > S??ance d'information</h3>
        <button className="bg-siriusorange text-white mb-4 md:mb-0 text-lg text-bold hover:opacity-90  p-2 rounded"> <a href="https://www.eventbrite.fr/e/172376642177" rel="noreferrer" target="_blank"> s'inscrire ?? la s??ance d'information</a></button>



    </section>

    </Layout>
    )

    export const query = graphql`
    {
           datoCmsFormationDeux {
        titreFormation
        niveau
      durE
        imageFormation {
          alt
          title
          gatsbyImageData(width:800
            height:600)
        }
              resumHomepage
              condition
              informationsGNRales
              programme
              publicCible
              softkills
        }
    }
      `


    export default CommunicationPage