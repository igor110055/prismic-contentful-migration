import getUrls from 'get-urls'
import prismicContent from './prismic-content.json' assert { type: 'json' }

const text = JSON.stringify(prismicContent)
var urls = getUrls(text)
const regex = new RegExp('^https://images.prismic.io')
const images = urls.map((url) => {
  if (url.match(regex)) {
    return url
  }
})
const found = urls.match(regex)
console.log(images)
