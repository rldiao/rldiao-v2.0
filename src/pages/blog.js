import React from 'react'
import Link from "gatsby-link";
import Layout from '../components/Layout';

import '../styles/blog-listing.css';

export default function blog( {data} ) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="blog-list-container">
          {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <div className="blog-date">{post.frontmatter.date}</div>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
