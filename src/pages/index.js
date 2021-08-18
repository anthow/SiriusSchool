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

    <h1 id="school" className="mt-20 text-3xl text-gray-600  text-center mb-12">Sirius School</h1>
<section className="w-10/12 m-auto place-content-center items-center gap-4 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
<figure>
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={600}
      height={600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
        className="flex-1"

    />
    </figure>
    <article>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Diam in arcu cursus euismod quis viverra.
         Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Leo duis ut diam quam nulla porttitor massa id neque. 
         Viverra vitae congue eu consequat ac felis. </p>
    </article>
</section>
<h2 className="mt-20 text-3xl text-gray-600 text-center mb-12" id="formations">Les formations </h2>
<figure className="w-10/12 m-auto">
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={3000}
      height={1500}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />
    </figure>
    <section className="mt-20 w-10/12 m-auto place-content-center items-center auto-cols-fr auto-rows-min gap-y-20 gap-x-20 auto-cols-fr auto-rows-min  grid-cols-2 md:grid "> 
    <figure>
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={900}
      height={600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className=""

    />
    </figure>
<article>
  <h3 className="mb-5  text-gray-600 text-2xl" >Entrepreneuriat  numérique et responsable </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Diam in arcu cursus euismod quis viverra.
         Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Leo duis ut diam quam nulla porttitor massa id neque. 
         Viverra vitae congue eu consequat ac felis.</p>
      
      <button className="border p-2 rounded mt-5"> en savoir plus</button>
</article>
<article>

<h3 className="mb-5 text-gray-600 text-2xl" >Entrepreneuriat  numérique et responsable </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Diam in arcu cursus euismod quis viverra.
         Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Leo duis ut diam quam nulla porttitor massa id neque. 
         Viverra vitae congue eu consequat ac felis.</p>
      
      <button className="border p-2 rounded mt-5"> en savoir plus</button>
      
</article>
<figure>
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={900}
      height={600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className=""

    />
    </figure> 
    <figure>
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={900}
      height={600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className=""

    />
    </figure>
<article>

<h3 className="mb-5 text-gray-600 text-2xl" >Entrepreneuriat  numérique et responsable </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Diam in arcu cursus euismod quis viverra.
         Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Leo duis ut diam quam nulla porttitor massa id neque. 
         Viverra vitae congue eu consequat ac felis.</p>
      
      <button className="border p-2 rounded mt-5"> en savoir plus</button>
</article>
<article>

<h3 className="mb-5 text-gray-600 text-2xl" >Entrepreneuriat  numérique et responsable </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Diam in arcu cursus euismod quis viverra.
         Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Leo duis ut diam quam nulla porttitor massa id neque. 
         Viverra vitae congue eu consequat ac felis.</p>
      
      <button className="border p-2 rounded mt-5"> en savoir plus</button>
</article>
<figure>
    <StaticImage
      src="https://fakeimg.pl/3000/"
      width={900}
      height={600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className=""

    />
    </figure> 
    </section>

    <h2 className="mt-20 text-center text-gray-600 text-3xl  mb-12" id="témoignages"> ils sont passé par chez nous  </h2>

     <section className=" w-10/12 m-auto md:grid grid-cols-3 gap-x-20 mb-20" >
       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
       <StaticImage
      src="https://fakeimg.pl/3000/"
      width={300}
      height={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="rounded-full  "

    />
    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5"> nom de l'apprenant </h3>
    <p className="text-center italic">Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. 
    Odio ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum. 
    Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. 
    Odio ut sem nulla pharetra. Tincidunt augue interdum velit euismod in pellentesque massa placerat. </p>
       </article>

       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
       <StaticImage
      src="https://fakeimg.pl/3000/"
      width={300}
      height={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="rounded-full  "

    />
    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5"> nom de l'apprenant </h3>
    <p className="text-center italic">Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. 
    Odio ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum. 
    Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. 
    Odio ut sem nulla pharetra. Tincidunt augue interdum velit euismod in pellentesque massa placerat. </p>
       </article>

       <article className="flex flex-col align-center">
         <figure className="w-12/12 m-auto mb-10">
       <StaticImage
      src="https://fakeimg.pl/3000/"
      width={300}
      height={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="rounded-full  "

    />
    </figure>
    <h3 className=" text-lg text-gray-600 text-center mb-5"> nom de l'apprenant </h3>
    <p className="text-center italic">Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. 
    Odio ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum. 
    Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. 
    Odio ut sem nulla pharetra. Tincidunt augue interdum velit euismod in pellentesque massa placerat. </p>
       </article>
       


       </section>  

<section className="bg-forms py-20" id="inscription">
  <div className="w-10/12 m-auto md:grid grid-cols-2 ">
    <article></article>
  <article >
  <h2 className=" text-2xl text-gray-600 mb-5"> inscription à la formation</h2>
  <p className="mb-5">Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. 
    Odio ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum. 
    Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. 
    Odio ut sem nulla pharetra. Tincidunt augue interdum velit euismod in pellentesque massa placerat. </p>
    <button className="bg-white border p-2 rounded"> Formulaire d'inscription</button>
    </article>
    </div>
</section>
<h2 className="mt-20 text-3xl text-gray-600 text-center mb-12"> contact</h2>
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
      imageSlider {
        gatsbyImageData
        (width:3000
          height:1000 )
      }
    }
  }
`


export default IndexPage
