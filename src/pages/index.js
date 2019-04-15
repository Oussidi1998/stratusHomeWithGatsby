import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/landing/cover"
import Section_one from "../components/landing/section-one"
import ButtomGreenCard from "../components/landing/buttomGreenCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Cover />
    <Section_one />
    <ButtomGreenCard />
  </Layout>
)

export default IndexPage
