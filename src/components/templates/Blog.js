import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../Layout';
import styles from './blog.module.css'
import appRoutes from "../utils/appRoutes"


// Made in reference to:
// https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481

export default function Blog( {data} ) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div className={styles.blogPostContainer}>
                <Helmet title={`Robert - ${post.frontmatter.title}`} />
                <div className={styles.blogPost}>
                    <h1>{post.frontmatter.title}</h1>
                    <div
                        className={styles.blogPostContent}
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
                <div className={styles.returnBtn}><a href={appRoutes.blog}>Return</a></div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;