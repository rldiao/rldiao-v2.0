import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import styles from "../styles/index.module.css"
import ProjectCells from "../components/cells/ProjectCell"

import "bootstrap/dist/css/bootstrap.min.css"
import externalLinks from "../components/utils/externalLinks"
import favicon16 from "../../static/logos/favicon-16x16.png"
import favicon32 from "../../static/logos/favicon-32x32.png"


export default ({ data }) => 
<Layout>
    <Helmet
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
      ]}>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <div className={styles.container}>
    {/* Intro Section */}
        <div className={styles.intro}>
          <div className={styles.introSubContainer}>
            <div className={styles.introHello}>Hello!</div>
            <div className={styles.introTagline}>I'm Robert, a software engineer who is on a path to world domination. Please take a look around my site!</div>
            <span className={styles.introEmail}>Want to join forces? -> </span>
            <span className={styles.introEmail}>
              <a href={externalLinks.email} target="_blank" rel="noopener noreferrer">rdiao.work@gmail.com</a>
            </span>
          </div>
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
          <div className={styles.subheadings}>Hackathons</div>
          <div className={styles.projectsTable}>
            <ProjectCells title="Unihack 2019" date="March 2019" 
            discription="Developed a safety communication app that was focused on simplicity and convenience. 
            One touch to let all your friends and loved ones know you are safe. 
            Developed on React Native (Expo) and Firebase."></ProjectCells>
            <ProjectCells title="Catalyst Hack" date="Nov 2018" 
            discription="Designed and developed a web platform to help the communication between universities and
            students with features such as subject recommendations and reviews. Developed on the React
            framework."></ProjectCells>
            <ProjectCells title="Hack the City" date="Sep 2018" 
            discription="Planned and designed a business case for an asset management system to help reduce asset loss for
            Downer and Spotless. "></ProjectCells>
            <ProjectCells title="UniHack 2018" date="Jul 2018" 
            discription="Designed and developed a safety focused navigation application to help users feel safe when
            returning home late at night. Developed on the Android platform using Java and Firebase. "></ProjectCells>
          </div>
          <div className={styles.subheadings}>Projects</div>
          <div className={styles.projectsTable}>
            <ProjectCells title="Personal Site" date="2018 - Present" 
            discription="Building a personal site to be centralised platform to share my achievements and thoughts. Developed on React + Gatsby.
            Hosted on GitHub <3."></ProjectCells>
            <ProjectCells title="iOS Navigation Application" date="Aug - Oct 2018" 
            discription="Prototyped and developed a navigation app focused on helping the elderly navigate. Developed the
            location saving feature for the app. Project was developed on Swift with Firebase."></ProjectCells>
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