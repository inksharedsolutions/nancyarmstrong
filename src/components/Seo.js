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
                image
                publishedBy
            }
        }
    }
`

const SEO = () => {
    const { site } = useStaticQuery(query);
    const pathname = useLocation();
    const hashLoc = pathname.hash.charAt(1).toUpperCase() + pathname.hash.slice(2) || "Home";

    return(
        <>
            <Helmet title={hashLoc + " | " + site.siteMetadata.author}>
                <meta name="description" content={site.siteMetadata.description} />
                <meta name="image" content={site.siteMetadata.image} />
                <meta name="keywords" content={site.siteMetadata.title + "," + site.siteMetadata.author + "," + site.siteMetadata.publishedBy} />

                {site.siteMetadata.siteUrl && <meta property="og:url" content={site.siteMetadata.siteUrl} />}
                {site.siteMetadata.title && <meta property="og:title" content={site.siteMetadata.title} />}
                {site.siteMetadata.author && <meta property="og:author" content={site.siteMetadata.author} />}
                {site.siteMetadata.image && <meta property="og:image" content={site.siteMetadata.image} />}
                {site.siteMetadata.description && ( <meta property="og:description" content={site.siteMetadata.description} /> )}
            </Helmet>
        </>
    )
}

export default SEO;