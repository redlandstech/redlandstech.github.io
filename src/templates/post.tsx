import React from 'react'
import {Link, graphql} from 'gatsby'
import {styled} from '../styles/theme'
import Img from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    previous?: any
    next?: any
  }
}

const StyledUl = styled('ul')`
  list-style-type: none;

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }
`

export default class PostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {previous, next} = this.props.pageContext

    return (
      <Layout title={siteTitle}>
        <Head title={post.frontmatter.title} description={post.excerpt} />
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <small>
              <Bio />
            </small>
            {post.frontmatter.featured && (
              <Img sizes={post.frontmatter.featured.childImageSharp.sizes} />
            )}
          </header>
          <div className={`page-content`}>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <StyledUl>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </StyledUl>
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
  markdownRemark: {
    id?: string
    excerpt?: string
    html: string
    frontmatter: {
      title: string
      date: string
      featured: any
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featured {
          childImageSharp {
            sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
