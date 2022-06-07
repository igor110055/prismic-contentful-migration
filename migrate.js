import 'dotenv/config'
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'
import minimist from 'minimist'

// PRISMIC SETTINGS
const repoName = process.env.PRISMIC_REPOSITORY
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { fetch })

// PARSE ARG FLAGS
const args = minimist(process.argv)

// GET CONTENT FROM PRISMIC
const init = async () => {
  const results = await client.getSingle(args.t, { lang: args.l })
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

  console.log(document)
}

init()
