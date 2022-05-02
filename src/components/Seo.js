import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from "@reach/router"

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
                publishedBy
            }
        }
    }
`

const SEO = ({ com }) => {
    const { site } = useStaticQuery(query);
    const { pathname } = useLocation();

    return(
        <>
            <Helmet title={com + " | " + site.siteMetadata.title} />
            <meta name="description" content={site.siteMetadata.description} />
        </>
    )
}

export default SEO;