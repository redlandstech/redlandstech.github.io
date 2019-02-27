import React from 'react'
import {Link, graphql} from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
}

export default class Index extends React.Component<Props> {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <Head title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <article>
          <header>
            <h1>{siteTitle}</h1>
            <h2 />
            <small>
              <Bio />
            </small>
          </header>
          <div className={`page-content`}>
            {posts.map(({node}) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                </div>
              )
            })}
          </div>
        </article>
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
