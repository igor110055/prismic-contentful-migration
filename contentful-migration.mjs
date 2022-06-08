import {
  getContentfulAssetsById,
  getContentfulTagsById,
  getEntryTags,
  getExistingArticleIdBySlug,
  // getAssetFileName,
  getContentfulNode,
} from './migrate-utils.js'
import currentContentfulData from './contentful-export.json' assert { type: 'json' }
const inputChunks = []
const locale = 'en'

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => inputChunks.push(chunk))
process.stdin.on('end', () => {
  const completeInput = inputChunks.join('')
  const prismicData = JSON.parse(completeInput)
  const contentfulAssets = getContentfulAssetsById({
    locale,
    assets: currentContentfulData.assets,
  })
  const contentfulTags = getContentfulTagsById(currentContentfulData.tags)

  generateContentfulImport({
    prismicData,
    contentfulAssets,
    contentfulTags,
  })
})

const generateContentfulImport = ({
  prismicData,
  contentfulAssets,
  contentfulTags,
}) => {
  const { results: prismicEntries } = prismicData
  const contentfulEntries = []

  for (const entry of prismicEntries) {
    const {
      data,
      tags: prismicTags,
      uid: slug,
      first_publication_date: firstPublishedAt,
      last_publication_date: publishedAt,
    } = entry
    const { title: titleFields, image, body } = data
    const [{ text: title }] = titleFields
    // const assetId = contentfulAssets[getAssetFileName(image.url)]
    const existingArticleId = getExistingArticleIdBySlug({
      slug,
      locale,
      contentfulData: currentContentfulData,
    })

    contentfulEntries.push({
      metadata: {
        tags: getEntryTags({ prismicTags, contentfulTags }),
      },
      sys: {
        publishedAt,
        firstPublishedAt,
        contentType: {
          sys: { id: 'article' },
        },
        ...(existingArticleId ? { id: existingArticleId } : {}),
      },
      fields: {
        slug: { [locale]: slug },
        title: { [locale]: title },
        content: {
          [locale]: {
            data: {},
            nodeType: 'document',
            content: getEntryContent(body),
          },
        },
        // ...(assetId
        //   ? {
        //       image: {
        //         [locale]: {
        //           sys: {
        //             type: 'Link',
        //             linkType: 'Asset',
        //             id: assetId,
        //           },
        //         },
        //       },
        //     }
        //   : {}),
      },
    })
  }

  process.stdout.write(
    `${JSON.stringify({
      entries: contentfulEntries,
    })}`
  )
}

const getEntryContent = (body) => {
  const content = body.reduce((result, entry) => {
    const { header, text: textItems } = entry
    const headerData = header?.[0]

    if (headerData) {
      const { text: headerText, type } = headerData

      if (headerText !== '') {
        const headingType = type.split('heading')[1]

        result = [
          ...result,
          getContentfulNode({
            type: `heading-${headingType}`,
            value: headerText,
          }),
        ]
      }
    }

    if (textItems) {
      textItems.map(({ type, text }) => {
        if (type === 'paragraph') {
          result = [
            ...result,
            getContentfulNode({
              type,
              value: text,
            }),
          ]
        }

        if (type === 'list-item') {
          result = [
            ...result,
            {
              data: {},
              nodeType: type,
              content: [
                getContentfulNode({
                  type: 'paragraph',
                  value: text,
                }),
              ],
            },
          ]
        }
      })
    }

    return result
  }, [])

  return getEntryContentWithGroupedListItems(content)
}

const getEntryContentWithGroupedListItems = (content) => {
  let groupedListItems = []

  return content.reduce((result, entry, index) => {
    if (entry.nodeType === 'list-item') {
      const nextSiblingNodeType = (content[index + 1] ?? {}).nodeType

      groupedListItems.push(entry)

      if (nextSiblingNodeType !== 'list-item') {
        result = [
          ...result,
          {
            data: {},
            nodeType: 'unordered-list',
            content: groupedListItems,
          },
        ]
        groupedListItems = []
      }

      return result
    }

    return [...result, entry]
  }, [])
}
