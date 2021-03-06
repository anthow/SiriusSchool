import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Siriusvideo from "../videos/Video-com-session-MP4-.mp4"
import {
  faCalendar,
  faEuroSign,

} from '@fortawesome/free-solid-svg-icons'


const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <figure className="w-12/12">
      <GatsbyImage image={data.datoCmsHomepage.imageSlider.gatsbyImageData} alt={data.datoCmsHomepage.imageSlider.alt} />
    </figure>

    <section className="w-10/12 m-auto place-content-center mt-16 md:mt-32 items-center gap-8 auto-cols-fr auto-rows-min  grid-cols-2 md:grid ">
    <video controls>
      <source src={Siriusvideo} type="video/mp4" />
    </video>
      <article>
        <h1 id="school" className=" mt-6 md:mt-0 text-5xl text-siriusblue font-black mb-6 md:mb-10">Sirius School</h1>

        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteSiriusSchool }}></div>

      </article>
    </section>
    <section className="w-10/12 m-auto">
      <h2 className="mt-16 text-5xl text-siriusblue font-black mb-5" id="formations">Les formations </h2>
      <h3 className=" hidden text-3xl text-siriusblue font-black mb-5" >Ligne du temps </h3>
      <figure className="hidden">

        <GatsbyImage image={data.datoCmsHomepage.ligneDuTemps.gatsbyImageData} alt={data.datoCmsHomepage.ligneDuTemps.alt} />

      </figure>
    </section>

    <section className="mt-20 w-12/12  md:w-10/12 m-auto place-content-center items-center  auto-rows-min md:gap-y-20 md:gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex flex-col ">
      <figure className="order-1 h-full">
        <GatsbyImage image={data.datoCmsFormationUne.imageFormation.gatsbyImageData} alt={data.datoCmsFormationUne.imageFormation.alt} className="h-full" />
      </figure>
      <article className="bg-formationun h-full p-10 order-2">
        <h3 className="mb-5   text-3xl font-black  text-white" >{data.datoCmsFormationUne.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationUne.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className=" flex mb-8 md:mb-0  items-center space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className=" m-auto  text-white font-black text-s"> {data.datoCmsFormationUne.durE} </p>
          </div>
          <div className=" flex space-x-2  mb-8 md:mb-0 items-center">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="text-white  m-auto text-s font-black"> GRATUIT </p>
          </div>
          <div className=" flex  space-x-2">

            <p className="md:m-auto  text-white text-s font-black"> Niveau: {data.datoCmsFormationUne.niveau}</p>
          </div>
        </div>
        <Link to="/entreprenariat-numerique">

          <button className=" p-2 px-4 hover:text-opacity-70 bg-white font-black rounded text-formationun mt-8"> En savoir plus</button>
        </Link>

      </article>
      <article className=" order-4 md: order-3  bg-formationdeux h-full p-10">

        <h3 className="mb-5 text-3xl font-black  text-white" >{data.datoCmsFormationDeux.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className="flex items-center mb-8 md:mb-0 space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className="m-auto text-white text-s"> {data.datoCmsFormationDeux.durE} </p>
          </div>  <div className=" flex  mb-8 md:mb-0 items-center space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="m-auto text-white text-s"> GRATUIT </p>
          </div>
          <div className=" flex items-center space-x-2">

            <p className="text-white text-s md:m-auto"> Niveau: {data.datoCmsFormationDeux.niveau}</p>
          </div>
        </div>
        <Link to="/communication-visuelle ">

          <button className=" p-2 px-4 bg-white hover:text-opacity-70 font-black rounded text-formationdeux mt-5"> En savoir plus</button>
        </Link>                               
      </article>


      <figure className="order-3 h-full md:order-4">
        <GatsbyImage image={data.datoCmsFormationDeux.imageFormation.gatsbyImageData} alt={data.datoCmsFormationDeux.imageFormation.alt} className="h-full" />

      </figure>
      <figure className="order-5 h-full">
        <GatsbyImage image={data.datoCmsFormationTroi.imageFormation.gatsbyImageData} alt={data.datoCmsFormationTroi.imageFormation.gatsbyImageData} className="h-full"  />

      </figure>
      <article className="order-6  bg-formationtrois h-full p-10">

        <h3 className="mb-5   text-3xl font-black  text-white" > {data.datoCmsFormationTroi.titreFormation}  </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationTroi.resumHomepage }}></div>
        <div className="md:flex  mt-8 md:space-x-8">
          <div className=" mb-8 md:mb-0 flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" />
            <p className="text-white text-s m-auto"> {data.datoCmsFormationTroi.durE} </p>
          </div>  <div className=" mb-8 md:mb-0 flex space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" />
            <p className="text-white text-s m-auto"> GRATUIT </p>
          </div>
          <div className="  flex space-x-2">

            <p className="text-white text-s md:m-auto"> Niveau: {data.datoCmsFormationTroi.niveau}</p>
          </div>
        </div>
        <Link to="/initiation-m??tiers-num??rique">

          <button className=" p-2 px-4 bg-white font-black mt-5 rounded hover:text-opacity-70 text-formationtrois"> En savoir plus</button>
        </Link>
      </article>

      <article className="order-8  md:order-7 md:mb-0 bg-formationquatre h-full p-10">


        <h3 className="mb-5  text-3xl font-black  text-white" > {data.datoCmsFormationQuatre.titreFormation} </h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.resumHomepage }}></div>

        <div className="md:flex  mt-8 md:space-x-8">
          <div className=" mb-8 md:mb-0 flex space-x-2 ">
            <FontAwesomeIcon className="text-white" icon={faCalendar} size="2x" /><p className="text-white m-auto text-s"> {data.datoCmsFormationQuatre.durE} </p>
          </div>  <div className=" flex mb-8 md:mb-0 space-x-2">

            <FontAwesomeIcon className="text-white" icon={faEuroSign} size="2x" /><p className="text-white m-auto text-s"> GRATUIT </p>
          </div>
          <div className=" flex space-x-2">

            <p className="text-white text-s md:m-auto"> Niveau: {data.datoCmsFormationQuatre.niveau}</p>
          </div>
        </div>
        <Link to="/initiation-programmation">

          <button className="p-2 px-4 bg-white font-black rounded hover:text-opacity-70 text-formationquatre mt-5"> En savoir plus</button>
        </Link>
      </article>
      <figure className="order-7 h-full md:order-8">
        <GatsbyImage image={data.datoCmsFormationQuatre.imageFormation.gatsbyImageData} alt={data.datoCmsFormationQuatre.imageFormation.alt} className="h-full" />

      </figure>
    </section>

    <h2 className="mt-24 text-center text-siriusblue font-black text-5xl  mb-12" id="t??moignages"> Ils sont pass??s par chez nous  </h2>

    <section className="  w-10/12 m-auto md:grid grid-cols-3 items-start md:gap-x-20 mb-16" >
      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">

          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageUn.gatsbyImageData} alt={data.datoCmsHomepage.imageTMoignageUn.alt} className="rounded-full" />



        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5"> {data.datoCmsHomepage.nomTMoignageUn} </h3>
        <div className="text-center italic mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageUn }}></div>

      </article>

      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">
          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageDeux.gatsbyImageData} alt={data.datoCmsHomepage.imageTMoignageDeux.alt} className="rounded-full" />

        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageDeux} </h3>
        <div className="text-center italic mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageDeux }}></div>

      </article>

      <article className="flex flex-col align-center">
        <figure className="w-12/12 m-auto mb-10">
          <GatsbyImage image={data.datoCmsHomepage.imageTMoignageTrois.gatsbyImageData} alt={data.datoCmsHomepage.imageTMoignageTrois.gatsbyImageData} className="rounded-full" />

        </figure>
        <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageTrois}  </h3>
        <div className="text-center italic  mb-16 md:mb-0 text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageTrois }}></div>

      </article>



    </section>

    <section className="bg-forms md:py-32" id="inscription">
      <div className=" w-12/12 md:w-10/12 m-auto md:grid grid-cols-2 ">
        <article></article>
        <article className="bg-inscription p-10 " >
          <h2 className=" text-2xl text-4xl text-siriusblue mb-5"> Inscription ?? l'une de nos formations</h2>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteInscription }}></div>

          <Link to="/inscription"><button className="bg-siriusorange text-white  text-lg text-black hover:opacity-90 mt-6 p-2 rounded"> Rejoins-nous </button></Link>
        </article>
      </div>
    </section>
    <section className="w-10/12 mt-16 md:mt-32 m-auto place-content-center items-center mt-8  md:gap-24 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex-col flex ">

      <form action="https://formspree.io/f/mrgrrkke" method="POST" className="order-2 md:order-1">
          <label className="">
            <p>Nom</p>
            <input type="text" className="border-2 border-siriusblue rounded "></input>
          </label>
          <label className="mt-5">
            <p className="mt-5">Pr??nom</p>
            <input type="text" className="  border-2 border-siriusblue rounded  " ></input>
          </label>
        <label className="mt-5">
            <p className="mt-5">Adresse mail</p>
            <input type="mail" className=" w-8/12 border-2 border-siriusblue rounded  " ></input>
          </label>
        <div className="flex flex-col">
        <p className="mt-5">Message</p>
          <textarea rows="5" className=" w-auto border-2 border-siriusblue rounded p-2"
            name="message" id="message" placeholder="" required="">

          </textarea>
          <button className="bg-siriusorange item-center md:w-1/6 w-1/2 text-white text-bold mt-6 p-2 hover:opacity-70 rounded" type="submit" value="envoyer" >
            Envoyer </button>
        </div>
      </form>
      <article className="mb-8 md:mb-0">
        <h2 className=" text-5xl text-siriusblue font-black mb-8 md:mb-16 " id="contact"> Contactez-nous</h2>
        <div className="order-1 md:order-2 text-siriusblue text-lg " dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteContact }}></div>
      </article>



    </section>
  </Layout>
)
export const query = graphql`
  {
    datoCmsHomepage {
      texteInscription
      texteContact
      imageSlider {
        alt
        title
        gatsbyImageData
        (width:3000
          height:1000)
      }
      texteSiriusSchool
    imageSiriusSchool {
      alt
      title
      gatsbyImageData(width:800
        height:600)
    }
    ligneDuTemps {
      alt
      title
      gatsbyImageData
      
  }
  nomTMoignageDeux
    nomTMoignageTrois
    nomTMoignageUn
    texteTMoignageDeux
    texteTMoignageTrois
    texteTMoignageUn
    imageTMoignageDeux {
      alt
      title
      gatsbyImageData(width:300
        height:300)
    }
    imageTMoignageTrois {
      alt
      title
      gatsbyImageData(width:300
        height:300)
    }
    imageTMoignageUn {
      alt
      title
      gatsbyImageData(width:300
        height:300)
    }
    }
    datoCmsFormationUne {
      titreFormation
      niveau
      durE 
      imageFormation {
        alt
        title
        gatsbyImageData(width:800
          height:650)
      }
            resumHomepage
      }
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
      }
  datoCmsFormationTroi {
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
      }
  datoCmsFormationQuatre {
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
      }
    }
`


export default IndexPage