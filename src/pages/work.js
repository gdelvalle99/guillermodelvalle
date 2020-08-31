import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Work</h1>
    <p>Working at a lab.</p>
    <p>Working at Aruba.</p>
    <p>Working as a translator.</p>
    <p>Volunteering as a Big Brother.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work