import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div>
    <h3>A portfolio website for a friend</h3>
    <p>Currently in progress, my friend Taylor and I have been working on a website for her.
      She's a fashion designer, so we built a website featuring a blog and a gallery making use of 
      GatsbyJS's implementation of GraphQL and hosted it using AWS Amplify. You can see the website in action <a href="https://www.tayloruchytil.com">
      here.</a>
    </p>
    </div>
    <h3>A data generation pipeline</h3>
    <p>As part of a greater project, I built a data generation pipeline written in Python. Using NumPy, dlib and Pandas, 
      I created a script to process and landmark the CelebA database. By using the provided .csv files and dlib's facial 
      detection, the script generates masks based on different labels marked on each image. You can check out the code <a>here</a>.
    </p>
    <h3>A plugin to automate the segmentation of images in ImageJ</h3>
    <p>The first time I wrote code for someone else! This plugin was the first serious project I worked on outside of class.
      Written in Java for the ImageJ software package, this plugin uses a classifier (created with the Trainable Segmentation plugin) 
      to segment and analyze folders of images. A paper was published about this, so you can check that out <a>here</a> and you can check out
      the code <a>here</a>.
    </p>
    <h3>A plugin to calculate colocalization in ImageJ</h3>
    <h3>And here's my github, where I have a bunch of projects from my classes uploaded</h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects