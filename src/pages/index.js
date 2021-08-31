import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import {
  faCalendar,
  faEuroSign,
  
} from '@fortawesome/free-solid-svg-icons'


const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <figure className="w-12/12">
      <GatsbyImage image={data.datoCmsHomepage.imageSlider.gatsbyImageData} />
    </figure>

    <section className="w-10/12 m-auto place-content-center mt-16 md:mt-32 items-center gap-8 auto-cols-fr auto-rows-min  grid-cols-2 md:grid ">
      <figure>
        <GatsbyImage className="" image={data.datoCmsHomepage.imageSiriusSchool.gatsbyImageData}
        />

      </figure>
      <article>
        <h1 id="school" className=" mt-6 md:mt-0 text-5xl text-siriusblue font-bold mb-6 md:mb-10">Sirius School</h1>

        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteSiriusSchool }}></div>

      </article>      
    </section>
    <section className="w-10/12 m-auto">
      <h2 className="mt-16 text-5xl text-siriusblue font-bold mb-5" id="formations">Les formations </h2>
      <h3 className=" text-3xl text-siriusblue font-bold mb-5" >Ligne du temps </h3>
      <figure>

        <GatsbyImage image={data.datoCmsHomepage.ligneDuTemps.gatsbyImageData} />

      </figure>
    </section>

    <section className="mt-20 w-12/12  md:w-10/12 m-auto place-content-center items-center  auto-rows-min md:gap-y-20 md:gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex flex-col ">
      <figure className="order-1">
        <GatsbyImage image={data.datoCmsFormationUne.imageFormation.gatsbyImageData} />
      </figure>
      <article className="bg-formationun font-bold h-full p-10 order-2 mb-16 md:mb-0">
        <h3 className="mb-5   text-2xl font-bold  text-white" >{data.datoCmsFormationUne.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationUne.resumHomepage }}></div>
        <div className="md:flex   mt-8 md:space-x-8">
          <div className=" flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="1x" /><p className="text-white font-bold text-sm"> {data.datoCmsFormationUne.durE} </p>
          </div>  <div className=" flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="1x" /><p className="text-white text-sm font-bold"> Gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-sm font-bold"> Niveau: {data.datoCmsFormationUne.niveau}</p>
          </div>
        </div>
        <Link to="/entreprenariat-numerique">

          <button className=" p-2 px-4 hover:text-opacity-70 bg-white font-bold rounded text-formationun mt-5"> en savoir plus</button>
        </Link>

      </article>
      <article className=" order-4 md: order-3 mb-16 md:mb-0 bg-formationdeux h-full p-10">

        <h3 className="mb-5  text-2xl font-bold  text-white" >{data.datoCmsFormationDeux.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.resumHomepage }}></div>
        <Link to="/communication-visuelle ">
          <div className="md:flex  mt-8 md:space-x-8">
            <div className="flex  space-x-2 ">
              <FontAwesomeIcon className="text-white" icon={faCalendar} size="1x" /><p className="text-white text-sm"> {data.datoCmsFormationDeux.durE} </p>
            </div>  <div className=" flex space-x-2">

              <FontAwesomeIcon className="text-white" icon={faEuroSign} size="1x" /><p className="text-white text-sm"> gratuit </p>
            </div>
            <div className=" flex space-x-2">

              <p className="text-white text-sm"> Niveau: {data.datoCmsFormationDeux.niveau}</p>
            </div>
          </div>
          <button className=" p-2 px-4 bg-white hover:text-opacity-70 font-bold rounded text-formationdeux mt-5"> en savoir plus</button>
        </Link>
      </article>
      <figure className="order-3 md:order-4">
        <GatsbyImage image={data.datoCmsFormationDeux.imageFormation.gatsbyImageData} />

      </figure>
      <figure className="order-5">
        <GatsbyImage image={data.datoCmsFormationTroi.imageFormation.gatsbyImageData} />

      </figure>
      <article className="order-6 mb-16 md:mb-0 bg-formationtrois h-full p-10">

        <h3 className="mb-5   text-2xl font-bold  text-white" > {data.datoCmsFormationTroi.titreFormation}  </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationTroi.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className=" flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="1x" /><p className="text-white text-sm"> {data.datoCmsFormationTroi.durE} </p>
          </div>  <div className=" flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="1x" /><p className="text-white text-sm"> gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-sm"> Niveau: {data.datoCmsFormationTroi.niveau}</p>
          </div>
        </div>
        <button className=" p-2 px-4 bg-white font-bold mt-5 rounded hover:text-opacity-70 text-formationtrois"> en savoir plus</button>
      </article>

      <article className="order-8  md:order-7 md:mb-0 bg-formationquatre h-full p-10">


        <h3 className="mb-5  text-2xl font-bold  text-white" > {data.datoCmsFormationQuatre.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.resumHomepage }}></div>

        <div className="md:flex  mt-8 md:space-x-8">
          <div className="  flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="1x" /><p className="text-white text-sm"> {data.datoCmsFormationQuatre.durE} </p>
          </div>  <div className=" flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="1x" /><p className="text-white text-sm"> gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-sm"> Niveau: {data.datoCmsFormationQuatre.niveau}</p>
          </div>
        </div>
        <button className="p-2 px-4 bg-white font-bold rounded hover:text-opacity-70 text-formationquatre mt-5"> en savoir plus</button>
      </article>
      <figure className="order-7 md:order-8">
        <GatsbyImage image={data.datoCmsFormationQuatre.imageFormation.gatsbyImageData} />

      </figure>
    </section>

    <h2 className="mt-24 text-center text-siriusblue font-bold text-4xl  mb-12" id="témoignages"> ils sont passé par chez nous  </h2>

    <section className="  w-10/12 m-auto md:grid grid-cols-3 items-start md:gap-x-20 mb-16" >
      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">

          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageUn.gatsbyImageData} className="rounded-full" />



        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5"> {data.datoCmsHomepage.nomTMoignageUn} </h3>
        <div className="text-center italic mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageUn }}></div>

      </article>

      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">
          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageDeux.gatsbyImageData} className="rounded-full" />

        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageDeux} </h3>
        <div className="text-center italic mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageDeux }}></div>

      </article>

      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">
          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageTrois.gatsbyImageData} className="rounded-full" />

        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageTrois}  </h3>
        <div className="text-center italic  mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageTrois }}></div>

      </article>



    </section>

    <section className="bg-forms md:py-32" id="inscription">
      <div className=" w-12/12 md:w-10/12 m-auto md:grid grid-cols-2 ">
        <article></article>
        <article className="bg-inscription p-10 " >
          <h2 className=" text-2xl text-4xl text-siriusblue mb-5"> inscription à l'une de nos formations</h2>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteInscription }}></div>

          <button className="bg-siriusorange text-white text-bold hover:opacity-90 mt-6 p-2 rounded"> Formulaire d'inscription</button>
        </article>
      </div>
    </section>
    <section className="w-10/12 mt-16 md:mt-32 m-auto place-content-center items-center mt-8  md:gap-24 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex-col flex ">

      <form className="order-2 md:order-1">
        <div className="md:flex space-x-20 ">
          <label className="">
            <p>Nom</p>
            <input type="text" class="border-2 "></input>
          </label>
          <label className="">
            <p>mail</p>
            <input type="mail"  class=" w-12/12 border-2" ></input>
          </label>
        </div>
        <div className="flex flex-col">
          <textarea rows="5" className=" w-auto mt-10 border-2 p-2"
            name="message" id="message" placeholder="votre message" required="">

          </textarea>
          <input className="bg-siriusorange item-center md:w-1/6 w-1/2 text-white text-bold mt-6 p-2 hover:opacity-70 rounded" type="submit" value="envoyer" />
        </div>
      </form>
      <arcticle className="mb-8 md:mb-0">
      <h2 className=" text-5xl text-siriusblue font-bold mb-8 md:mb-16 " id="contact" >contact</h2>
        <div className="order-1 md:order-2 text-siriusblue text-lg " dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteContact }}></div>
      </arcticle>


    </section>
  </Layout>
)
export const query = graphql`
  {
    datoCmsHomepage {
      texteInscription
      texteContact
      imageSlider {
        gatsbyImageData
        (width:3000
          height:1000)
      }
      texteSiriusSchool
    imageSiriusSchool {
      gatsbyImageData(width:800
        height:600)
    }
    ligneDuTemps {
      gatsbyImageData
  }
  nomTMoignageDeux
    nomTMoignageTrois
    nomTMoignageUn
    texteTMoignageDeux
    texteTMoignageTrois
    texteTMoignageUn
    imageTMoignageDeux {
  
      gatsbyImageData(width:300
        height:300)
    }
    imageTMoignageTrois {
      gatsbyImageData(width:300
        height:300)
    }
    imageTMoignageUn {
      gatsbyImageData(width:300
        height:300)
    }
    }
    datoCmsFormationUne {
      titreFormation
      niveau
      durE 
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
    datoCmsFormationDeux {
      titreFormation
      niveau
      durE 
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
  datoCmsFormationTroi {
      titreFormation
      niveau
      durE 
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
  datoCmsFormationQuatre {
      titreFormation
      niveau
      durE 
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
    }
`


export default IndexPage