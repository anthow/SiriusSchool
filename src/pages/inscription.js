import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = ({ data }) => (
    <Layout>
        <Seo title="Inscription" />
        <section className="<w-10/12 m-auto">
        <h1 className="w-10/12 m-auto mt-16 text-5xl text-siriusblue font-bold mb-5" > inscription 2021 </h1>
        <section className="mt-20 w-12/12  md:w-10/12 m-auto place-content-center items-center  auto-rows-min md:gap-y-20 md:gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid flex flex-col ">
      <figure className="order-1">
        <GatsbyImage image={data.datoCmsPageInscription.imageFormation.gatsbyImageData} />
      </figure>
      <article className="bg-formationun font-bold h-full p-10 order-2">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.datoCmsPageInscription.texteFormation}}></div>
      

      </article>
      </section>
        <div dangerouslySetInnerHTML={{ __html: '<iframe width="540" height="3000" src="https://1b0b29dc.sibforms.com/serve/MUIEAMmTAWWi71u6mQz0y8dtcuvV_7fUkP-cq6dGeZb2g1-PjLu0pTVmJFOMRMZ1ydoryiMmJCFR7G13cIyigLXVIDycEwv4--1lr14qWBdWNv4TIrvCLDEsFggsXAPbjygKye6xo0VZXGP9_2KTYt4N0M_JxfuSWF2Ik95y_AWHcomgQl6dtl-m3j_Htj5p37ltVQYUJ1qFAsRb" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>'}} />;
        </section>
  </Layout>
            )

            export const query = graphql`
            {
              datoCmsPageInscription {
                imageFormation {
                  gatsbyImageData
                }
                texteFormation
              }
            }
          `

            export default IndexPage