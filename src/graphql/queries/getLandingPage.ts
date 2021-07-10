import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      createdAt: created_at
      ...logo
      ...header
    }
  }
`

export default GET_LANDING_PAGE
