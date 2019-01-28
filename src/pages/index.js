import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout";


export default ({ data }) => 
<Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"></link>
    </Helmet>
</Layout>

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        authorFirstname
        authorSurname
      }
    }
  }
`