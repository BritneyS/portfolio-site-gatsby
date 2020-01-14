import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../assets/css/index-styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{ marginTop: `100px` }}>
      <h1 className="intro-heading"><span role="img" aria-label="wave">👋</span> Hi, <br />I'm Britney</h1>
      <h2 className="intro-subheader">I'm a software developer who builds apps for the web and iOS. Nice to meet you!</h2>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
