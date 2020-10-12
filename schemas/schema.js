// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import our documents
// import siteSettings from './documents/siteSettings';
import page from './documents/page'
import blog from './documents/blog'
import blogCategory from './documents/blogCategory'
import event from './documents/event'
import eventCategory from './documents/eventCategory'
import partner from './documents/partner'
import author from './documents/author'

// Import our objects
import mainImage from './objects/mainImage'
import themeImage from './objects/themeImage'
import bodyPortableText from './objects/bodyPortableText'
import pageBuilderHero from './objects/pageBuilderHero'
import pageBuilderContent from './objects/pageBuilderContent'
import pageBuilderColumns from './objects/pageBuilderColumns'
import pageBuilderPosts from './objects/pageBuilderPosts'
import pageBuilderCards from './objects/pageBuilderCards'
import pageBuilderPartners from './objects/pageBuilderPartners'
import pageBuilderStatistics from './objects/pageBuilderStatistics'
import column from './objects/column'
import card from './objects/card'
import link from './objects/link'
import linkBlock from './objects/linkBlock'
import linkGrid from './objects/linkGrid'
import statBlock from './objects/statBlock'
import statGrid from './objects/statGrid'
import button from './objects/button'
import linkBold from './objects/linkBold'

import test from './objects/test'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    // siteSettings,
    page,
    blog,
    blogCategory,
    event,
    eventCategory,
    partner,
    author,

    // Objects
    bodyPortableText,
    mainImage,
    themeImage,
    pageBuilderHero,
    pageBuilderContent,
    pageBuilderColumns,
    pageBuilderCards,
    pageBuilderPosts,
    pageBuilderPartners,
    pageBuilderStatistics,
    column,
    card,
    link,
    button,
    linkBlock,
    linkBold,
    linkGrid,
    statBlock,
    statGrid,

    test,
  ]),
})
