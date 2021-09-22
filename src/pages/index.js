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
      <h3 className=" hidden text-3xl text-siriusblue font-bold mb-5" >Ligne du temps </h3>
      <figure className="hidden">

        <GatsbyImage image={data.datoCmsHomepage.ligneDuTemps.gatsbyImageData} />

      </figure>
    </section>

    <section className="mt-20 w-12/12  md:w-10/12 m-auto place-content-center items-center  auto-rows-min md:gap-y-20 md:gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex flex-col ">
      <figure className="order-1">
        <GatsbyImage image={data.datoCmsFormationUne.imageFormation.gatsbyImageData} />
      </figure>
      <article className="bg-formationun font-bold h-full p-10 order-2">
        <h3 className="mb-5   text-3xl font-bold  text-white" >{data.datoCmsFormationUne.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationUne.resumHomepage }}></div>
        <div className="md:flex   mt-8 md:space-x-8">
          <div className=" flex items-center space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className=" m-auto text-white font-bold text-s"> {data.datoCmsFormationUne.durE} </p>
          </div>
          <div className=" flex space-x-2  items-center">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="text-white m-auto text-s font-bold"> Gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="m-auto text-white text-s font-bold"> Niveau: {data.datoCmsFormationUne.niveau}</p>
          </div>
        </div>
        <Link to="/entreprenariat-numerique">

          <button className=" p-2 px-4 hover:text-opacity-70 bg-white font-bold rounded text-formationun mt-8"> En savoir plus</button>
        </Link>

      </article>
      <article className=" order-4 md: order-3  bg-formationdeux h-full p-10">

        <h3 className="mb-5  text-3 xl font-bold  text-white" >{data.datoCmsFormationDeux.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className="flex items-center  space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className="m-auto text-white text-s"> {data.datoCmsFormationDeux.durE} </p>
          </div>  <div className=" flex items-center space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="m-auto text-white text-s"> gratuit </p>
          </div>
          <div className=" flex items-center space-x-2">

            <p className="text-white text-s m-auto"> Niveau: {data.datoCmsFormationDeux.niveau}</p>
          </div>
        </div>
        <Link to="/communication-visuelle ">

          <button className=" p-2 px-4 bg-white hover:text-opacity-70 font-bold rounded text-formationdeux mt-5"> En savoir plus</button>
        </Link>                               
      </article>


      <figure className="order-3 md:order-4">
        <GatsbyImage image={data.datoCmsFormationDeux.imageFormation.gatsbyImageData} />

      </figure>
      <figure className="order-5">
        <GatsbyImage image={data.datoCmsFormationTroi.imageFormation.gatsbyImageData} />

      </figure>
      <article className="order-6  bg-formationtrois h-full p-10">

        <h3 className="mb-5   text-3xl font-bold  text-white" > {data.datoCmsFormationTroi.titreFormation}  </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationTroi.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className=" flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className="text-white text-s m-auto"> {data.datoCmsFormationTroi.durE} </p>
          </div>  <div className=" flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="text-white text-s m-auto"> gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-s m-auto"> Niveau: {data.datoCmsFormationTroi.niveau}</p>
          </div>
        </div>
        <Link to="/initiation-métiers-numérique">

          <button className=" p-2 px-4 bg-white font-bold mt-5 rounded hover:text-opacity-70 text-formationtrois"> en savoir plus</button>
        </Link>
      </article>

      <article className="order-8  md:order-7 md:mb-0 bg-formationquatre h-full p-10">


        <h3 className="mb-5  text-3xl font-bold  text-white" > {data.datoCmsFormationQuatre.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.resumHomepage }}></div>

        <div className="md:flex  mt-8 md:space-x-8">
          <div className="  flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" /><p className="text-white m-auto text-s"> {data.datoCmsFormationQuatre.durE} </p>
          </div>  <div className=" flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" /><p className="text-white m-auto text-s"> gratuit </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-s m-auto"> Niveau: {data.datoCmsFormationQuatre.niveau}</p>
          </div>
        </div>
        <Link to="/initiation-programmation">

          <button className="p-2 px-4 bg-white font-bold rounded hover:text-opacity-70 text-formationquatre mt-5"> En savoir plus</button>
        </Link>
      </article>
      <figure className="order-7 md:order-8">
        <GatsbyImage image={data.datoCmsFormationQuatre.imageFormation.gatsbyImageData} />

      </figure>
    </section>

    <h2 className="mt-24 text-center text-siriusblue font-bold text-4xl  mb-12" id="témoignages"> Ils sont passé par chez nous  </h2>

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
          <h2 className=" text-2xl text-4xl text-siriusblue mb-5"> Inscription à l'une de nos formations</h2>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteInscription }}></div>

          <Link to="/inscription"><button className="bg-siriusorange text-white  text-lg text-black hover:opacity-90 mt-6 p-2 rounded"> Rejoins-nous </button></Link>
        </article>
      </div>
    </section>
    <section className="w-10/12 mt-16 md:mt-32 m-auto place-content-center items-center mt-8  md:gap-24 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex-col flex ">

      <form action="https://formspree.io/f/mrgrrkke" method="POST" className="order-2 md:order-1">
        <div className="md:flex spaxe-y-0 space-x-20 ">
          <label className="">
            <p>Nom</p>
            <input type="text" class="border-2 border-siriusblue rounded "></input>
          </label>
          <label className="">
            <p>Prénom</p>
            <input type="text" class=" w-12/12 border-2 border-siriusblue rounded  " ></input>
          </label>
        </div>
        <label className="mt-10">
            <p className="mt-10">Adresse mail</p>
            <input type="mail" class=" w-12/12 border-2 border-siriusblue rounded  " ></input>
          </label>
        <div className="flex flex-col">
          <textarea rows="5" className=" w-auto mt-10 border-2 border-siriusblue rounded  p-2"
            name="message" id="message" placeholder="votre message" required="">

          </textarea>
          <button className="bg-siriusorange item-center md:w-1/6 w-1/2 text-white text-bold mt-6 p-2 hover:opacity-70 rounded" type="submit" value="envoyer" >
            Envoyer </button>
        </div>
      </form>
      <arcticle className="mb-8 md:mb-0">
        <h2 className=" text-5xl text-siriusblue font-bold mb-8 md:mb-16 " id="contact"> Contact</h2>
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