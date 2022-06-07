import 'dotenv/config'
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'
import minimist from 'minimist'
import { richText } from './contentful/constants.cjs'

// PARSE ARG FLAGS
const args = minimist(process.argv)

///////////////////////////////////
// QUERY AND CONVERT PRISMIC DOCS

// PRISMIC SETTINGS
const repoName = process.env.PRISMIC_REPOSITORY
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { fetch })

// GET CONTENT FROM PRISMIC
const init = async () => {
  const results = await client.getSingle(args.t, { lang: args.l })
  // CONSTRUCT THE DOCUMENT //
  const document = {
    uid: results.uid,
    firstPublished: results.first_publication_date,
    lastPublished: results.last_publication_date,
    seo: {
      title: results.data.meta_title,
      description: results.data.meta_description,
    },
    name: results.data.name,
    type: results.data.integration_type,
    icon: {
      alt: results.data.icon.alt,
      url: results.data.icon.url,
    },
    hasCsv: results.data.hasCsv,
    hasApi: results.data.hasApi,
    priority: results.data.priority,
  }
  // FILTER SECTIONS THAT HAVE BODY TEXT //
  var body = results.data.body.map((sections) => {
    // RETURN YOUTUBE VIDEOS
    if (sections.slice_type === 'youtube_video') {
      return {
        type: 'youtube_video',
        content: [{ url: sections }],
      }
    } else if (sections.slice_type === 'text_section') {
      // RETURN TEXT SECTION
      return {
        type: 'text_section',
        content: sections.primary.body.map((section) => {
          return {
            text: section.text,
            type: section.type,
          }
        }),
      }
    } else if (sections.slice_type === 'info_text') {
      // RETURN INFO TEXT
      return {
        type: 'info_text',
        content: sections.primary.body.map((section) => {
          return {
            text: section.text,
            type: section.type,
          }
        }),
      }
    }
  })

  console.log(
    richText({
      data: {},
      marks: [],
      value: 'this is text',
      nodeType: 'text',
    })
  )
}

init()
