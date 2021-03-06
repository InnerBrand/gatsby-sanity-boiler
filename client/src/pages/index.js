import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Block from "@sanity/block-content-to-react"

// Components
import Layout from '../components/Layout'

// Styles
import * as styles from '../styles/modules/pages/Home.module.scss'

const Home = ({ data }) => {
  console.log(data)

  const { featuredImage, headline, subhead } = data.allSanityHomepage.nodes[0].homepageContent
  const featImg = getImage(featuredImage.asset)

  return (
    <Layout header footer>
      <h1>{headline}</h1>
      <Block blocks={subhead._rawData} />
      <GatsbyImage image={featImg} />
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
        homepageContent {
          headline
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          subhead {
            _rawData
          }
        }
      }
    }
  }
`

export default Home

