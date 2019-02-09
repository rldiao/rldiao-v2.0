import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout";
import styles from "../styles/index.module.css"
import ProjectCells from "../components/cells/ProjectCell"

import 'bootstrap/dist/css/bootstrap.min.css';


export default ({ data }) => 
<Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"></link>
    </Helmet>
    <div className="main">
    {/* Intro Section */}
        <div className={styles.intro}>
          <div className={styles.introHello}>Hello!</div>
          <div className={styles.introTagline}>I'm Robert, a software engineer who is on a path to world domination. Please take a look around my site!</div>
          <span className={styles.introEmail}>Want to join forces? -> </span>
          <span className={styles.introEmail}>
            <a href="mailto:rdiao.work@gmail.com" target="_blank" rel="noopener noreferrer">rdiao.work@gmail.com</a>
          </span>
        </div>
    {/* Backgrond Section */}
        <div className={styles.background}>
          <div className={styles.subheadings}>Background</div>
          <p className={styles.backgroundTextContainer}>
            I am currently a student at The University of Melbourne studying Computing and Software. I love going to Hackathons and discussing the future.
            I hope to use the skills I acquire to one day make a small difference in the world.            
          </p>
        </div>
    {/* Project Section */}
        <div className={styles.projects}>
          <div className={styles.subheadings}>Projects</div>
          <div className={styles.projectsTable}>
            <ProjectCells title="Catalyst Hack" date="Nov 2018" 
            discription="Designed and developed a web platform to help the communication between universities and
            students with features such as subject recommendations and reviews. Developed on the React
            framework."></ProjectCells>
            <ProjectCells title="Hack the City" date="Sep 2018" 
            discription="Planned and designed a business case for an asset management system to help reduce asset loss for
            Downer and Spotless. "></ProjectCells>
            <ProjectCells title="UniHack" date="Jul 2018" 
            discription="Designed and developed a safety focused navigation application to help users feel safe when
            returning home late at night. Developed on the Android platform using Java and a Firebase backend. "></ProjectCells>
            <ProjectCells title="iOS Navigation Application" date="Aug - Oct 2018" 
            discription="Prototyped and developed a navigation app focused on helping the elderly navigate. Developed the
            location saving feature for the app. Project was developed on Swift with a Firebase backend."></ProjectCells>
            <ProjectCells title="Board game AI" date="Mar - May 2017" 
            discription="Designed and developed an AI system to play a custom boardgame by utilizing algorithms and data
            structures such as the Minimax tree and A star. Developed on Python 3."></ProjectCells>
          </div>
        </div>
    </div>
</Layout>

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`