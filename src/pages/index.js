import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import resume from '../downloads/resume.pdf'

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Hey there!</h1>
    <h4>My name's Guillermo, but you can just call me Memo.</h4>
    <p>And welcome to my portfolio website! It's great to have you here.
      That right there on the right is me. I'm a computer science and engineering major
      with a minor in mathematics at the University of Nevada, Reno and I hope to graduate on 
      May 2021.</p>
    <h4>What's this website for?</h4>
    <p>This website is to show off some of my work that I've done over the years. Within this website,
      I've included some of the things that I have done during my time as an undergrad. If you're interested
      in seeing my resume, you can click <a href={resume}>here</a> (I'm also linking it above, for visibility).
    </p>
    <h4>A little more about me</h4>
    <p>As a student, I have been able to explore and learn a lot. Computer science is a vast field and there will
      always be a ton to learn. For my core classes, I mainly worked with C++, but I have also used Java and Python a great deal 
      in my extracurriculars. I've explored subjects such as computer vision, machine learning, networking and web development.
    </p>
    <p>When it comes to things other than computer science, I'm also a huge fan of movies and books. I enjoy watching movies with
      friends and families on my free time and I always enjoy discovering new books. 
    </p>
    <br />
  </Layout>
)

export default IndexPage
