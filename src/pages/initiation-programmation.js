import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import NavForm from "../components/NavForm"

const CommunicationPage = ({ data }) => (
    <Layout>
    <Seo title="Home" />
<NavForm className="" ></NavForm>  
<section className="mt-20 w-10/12 m-auto place-content-center items-center auto-cols-fr auto-rows-min gap-y-20 gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
<figure>
<GatsbyImage image={data.datoCmsFormationQuatre.imageFormation.gatsbyImageData}/>
</figure>
<article className="bg-formationquatre p-10">
<h3 className="mb-5   text-2xl font-bold  text-white" >{data.datoCmsFormationQuatre.titreFormation} </h3>
<div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.informationsGNRales }}></div>

</article>
</section> 
<section className="w-10/12 m-auto mt-10"> 
<h3 className="mb-5   text-siriusblue text-2xl font-bold" > Public cible</h3>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.publicCible }}></div>

    </section>
    <h3 className="mb-5 mt-20  text-siriusblue text-2xl font-bold text-center">Le programme </h3>
    <section className="mt-20 w-10/12 m-auto  auto-cols-fr auto-rows-min gap-y-20 gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
        
    <article className="border-formationquatre border p-4 rounded">
    <h4 className="mb-10  text-center text-xl text-formationquatre font-bold">la formation</h4>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.programme }}></div>
</article>
<article className="  bg-siriusblue p-4 text-white rounded">
    <h4 className="mb-10 text-center  text- text-xl font-bold"> les softkills</h4>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.softkills }}></div>
</article>

        </section> 
        <section className="w-10/12  m-auto mt-20"> 
<h3 className="mb-5  text- text-2xl text-siriusblue font-bold" > Conditions d'admission</h3>
    <div className="" dangerouslySetInnerHTML={{ __html: data.datoCmsFormationQuatre.condition }}></div>

    </section>
    </Layout>
    )

    export const query = graphql`
    {
           datoCmsFormationQuatre {
        titreFormation
        imageFormation {
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