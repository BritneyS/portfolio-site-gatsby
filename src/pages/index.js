import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/IntroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
