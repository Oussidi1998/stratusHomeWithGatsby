import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/landing/cover"
import Section_one from "../components/landing/section-one"
import Section_two from "../components/landing/section-two"
import ButtomGreenCard from "../components/landing/buttomGreenCard"
import Sponsors from "../components/landing/sponsors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Cover />
    <Section_one />
    <Section_two />
    <Sponsors />
    <ButtomGreenCard />
  </Layout>
)

export default IndexPage
