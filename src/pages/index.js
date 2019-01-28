import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PageContainer from "../components/PageContainer";
import Segments from "../components/Segments";
import Header from "../components/header/Header";


export default ({ data }) => 
<PageContainer>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"></link>
    </Helmet>
    <Header></Header>
    <Segments>About Me</Segments>
    <Segments>Experience</Segments>
    <Segments>Education</Segments>
    <Segments>Contact Me</Segments>
</PageContainer>

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