import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>A portfolio website for a friend</p>
    <p>A data generation pipeline</p>
    <p>A plugin to automate the segmentation of images in ImageJ</p>
    <p>A plugin to calculate colocalization in ImageJ</p>
    <p>And here's my github, where I have a bunch of projects from my classes uploaded</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects