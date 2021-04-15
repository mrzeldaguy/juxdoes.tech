/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "./common/icon"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      site {
        siteMetadata {
          contact {
            name
            link
          }
        }
      }
    }
  `)

  const contacts = data.site.siteMetadata?.contact

  return (
    <div>
      <h2>Contact me</h2>
      <div className="contact-container">
        {contacts?.map(contact => {
          return <Icon name={contact.name} link={contact.link} />
        })}
      </div>
    </div>
  )
}

export default Contact
