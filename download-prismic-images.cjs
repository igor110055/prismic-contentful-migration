const { exec } = require('child_process')
const inputChunks = []

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => inputChunks.push(chunk))
process.stdin.on('end', function () {
  const inputJSON = inputChunks.join('')
  const prismicData = JSON.parse(inputJSON)
  const curlCommand = getCurlToDownloadAllImages(prismicData)

  exec(curlCommand)
})

function getCurlToDownloadAllImages(data) {
  const { results: entries } = data
  const allImageUrls = []

  for (const entry of entries) {
    const {
      data: {
        image: { url },
      },
    } = entry

    if (!url) {
      continue
    }

    allImageUrls.push(url.slice(0, url.indexOf('?auto=compress,format')))
  }

  return `curl ${[...new Set(allImageUrls)]
    .map((url) => ` -O ${url}`)
    .join('')}`
}
