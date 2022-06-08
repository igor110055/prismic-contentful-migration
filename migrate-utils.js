const PRISMIC_IMAGE_URL_VARIABLES = '?auto=compress,format'

const getContentfulAssetsById = ({ assets, locale }) =>
  assets.reduce(
    (result, { sys, fields }) => ({
      ...result,
      [fields.file[locale].fileName]: sys.id,
    }),
    {}
  )

const getContentfulTagsById = (tags) =>
  tags.reduce(
    (result, { sys, name }) => ({
      ...result,
      [name]: sys.id,
    }),
    {}
  )

const getEntryTags = ({ prismicTags, contentfulTags }) =>
  prismicTags.map((tag) => ({
    sys: {
      type: 'Link',
      linkType: 'Tag',
      id: contentfulTags[tag],
    },
  }))

const getExistingArticleIdBySlug = ({ slug, contentfulData, locale }) => {
  const { entries } = contentfulData
  const entry = entries.find(({ fields }) => fields.slug[locale] === slug)

  return entry?.sys?.id
}

const getAssetFileName = ({ assetUrl }) => {
  const fileName = assetUrl.slice(assetUrl.lastIndexOf('/') + 1)

  return fileName.slice(0, fileName.indexOf(PRISMIC_IMAGE_URL_VARIABLES))
}

const getContentfulNode = ({ type, value }) => ({
  data: {},
  content: [
    {
      value,
      data: {},
      marks: [],
      nodeType: 'text',
    },
  ],
  nodeType: type,
})

module.exports = {
  getContentfulAssetsById,
  getContentfulTagsById,
  getEntryTags,
  getExistingArticleIdBySlug,
  getAssetFileName,
  getContentfulNode,
}
