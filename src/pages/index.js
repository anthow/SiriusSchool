import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = ({ data }) => (
    <Layout>
      <Seo title="Home" />
 <figure>
 <GatsbyImage image={data.datoCmsHomepage.imageSlider.gatsbyImageData} />
   </figure> 

    <h1 id="school" className="mt-20 text-4xl text-siriusblue font-bold  text-center mb-12">Sirius School</h1>
<section className="w-10/12 m-auto place-content-center items-center gap-4 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
<figure>
   <GatsbyImage image={data.datoCmsHomepage.imageSiriusSchool.gatsbyImageData}
     />

    </figure>
    <article>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteSiriusSchool }}></div>
 
    </article>
</section>
<h2 className="mt-20 text-4xl text-center text-siriusblue font-bold mb-12" id="formations">Les formations </h2>
<figure className="w-10/12 m-auto">
<GatsbyImage image={data.datoCmsHomepage.ligneDuTemps.gatsbyImageData} />

    </figure>
    <section className="mt-20 w-10/12 m-auto place-content-center items-center auto-cols-fr auto-rows-min gap-y-20 gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
    <figure>
    <GatsbyImage image={data.datoCmsFormationUne.imageFormation.gatsbyImageData}/>
    </figure>
<article className="bg-formationun p-10">
  <h3 className="mb-5   text-2xl font-bold  text-white" >{data.datoCmsFormationUne.titreFormation} </h3>
  <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationUne.resumHomepage }}></div>
  <Link to="/entreprenariat-numerique">  

      <button className=" p-2 px-4      bg-white font-bold rounded text-formationun mt-5"> en savoir plus</button>
      </Link>

</article>
<article className="bg-formationdeux p-10">

<h3 className="mb-5  text-2xl font-bold  text-white" >{data.datoCmsFormationDeux.titreFormation} </h3>
<div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationDeux.resumHomepage }}></div>
<Link to="/communication-visuelle ">  

<button className=" p-2 px-4 bg-white font-bold rounded text-formationdeux mt-5"> en savoir plus</button>
</Link>
</article>
<figure>
<GatsbyImage image={data.datoCmsFormationDeux.imageFormation.gatsbyImageData}/>

    </figure> 
    <figure>
    <GatsbyImage image={data.datoCmsFormationTroi.imageFormation.gatsbyImageData}/>

    </figure>
    <article className="bg-formationtrois p-10">

<h3 className="mb-5   text-2xl font-bold  text-white" > {data.datoCmsFormationTroi.titreFormation}  </h3>
<div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationTroi.resumHomepage }}></div>

      <button className=" p-2 px-4 bg-white font-bold rounded text-formationtrois mt-5"> en savoir plus</button>
</article>

 <article className="bg-formationquatre p-10">


<h3 className="mb-5  text-2xl font-bold  text-white" > {data.datoCmsFormationQuatre.titreFormation} </h3>
<div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.resumHomepage }}></div>

      
      <button className="p-2 px-4 bg-white font-bold rounded text-formationquatre mt-5"> en savoir plus</button>
</article>
<figure>
<GatsbyImage image={data.datoCmsFormationQuatre.imageFormation.gatsbyImageData}/>

    </figure> 
    </section>

    <h2 className="mt-20 text-center text-siriusblue font-bold text-4xl  mb-12" id="témoignages"> ils sont passé par chez nous  </h2>

     <section className=" w-10/12 m-auto md:grid grid-cols-3 items-start gap-x-20 mb-20" >
       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
   
<GatsbyImage image={data.datoCmsHomepage.imageTMoignageUn.gatsbyImageData} className="rounded-full"/>



    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5"> {data.datoCmsHomepage.nomTMoignageUn} </h3>
    <div className="text-center italic text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageUn }}></div>

       </article>

       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
         <GatsbyImage image={data.datoCmsHomepage.imageTMoignageDeux.gatsbyImageData} className="rounded-full"/>

    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageDeux} </h3>
    <div className="text-center italic text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageDeux }}></div>

       </article>

       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
         <GatsbyImage image={data.datoCmsHomepage.imageTMoignageTrois.gatsbyImageData} className="rounded-full"/>

    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5">{data.datoCmsHomepage.nomTMoignageTrois}  </h3>
    <div className="text-center italic text-sm text-gray" dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteTMoignageTrois }}></div>

       </article>
       


       </section>  

<section className="bg-forms py-20" id="inscription">
  <div className="w-10/12 m-auto md:grid grid-cols-2 ">
    <article></article>
  <article className="bg-inscription p-10 " >
  <h2 className=" text-2xl text-4xl text-siriusblue mb-5"> inscription à l'une de nos formations</h2>
  <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteInscription }}></div>

    <button className="bg-siriusblue text-white text-bold mt-5 p-2 rounded"> Formulaire d'inscription</button>
    </article>
    </div>
</section>
<h2 className="mt-20 text-4xl text-gray-600 text-center mb-12"> contact</h2>
<section className="w-6/12 m-auto" id="contact">

<form>
<div className="flex space-x-20">
  <label className="flex space-x-2">
    <p>Nom</p>
    <input type="text" class="border-2 "></input>
    </label>
    <label className="flex space-x-4">
    <p>mail</p>
    <input type="mail" class="border-2 "></input>
    </label>
    </div>
<div className="flex flex-col">
    <textarea rows="5" cols="70" className="w-12/12 mt-10 border-2" 
    name="message" id="message" placeholder="votre message" required="">

    </textarea>
      <input className="border-2 p-2 w-2/12 mt-5" type="submit" value="envoyer" />
      </div>
</form>



</section>
  </Layout>
)
export const query = graphql`
  {
    datoCmsHomepage {
      texteInscription
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
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
    datoCmsFormationDeux {
      titreFormation
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
  datoCmsFormationTroi {
      titreFormation
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
  datoCmsFormationQuatre {
      titreFormation
      imageFormation {
        gatsbyImageData(width:800
          height:600)
      }
            resumHomepage
      }
    }
`


export default IndexPage