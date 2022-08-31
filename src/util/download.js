const stream = require('stream')

module.exports = (file, response, fileName) => {
  const content = Buffer.from(file, 'base64')
  const readStream = new stream.PassThrough()

  readStream.end(content)

  response.set('Content-disposition', 'attachment; filename=' + fileName)
  response.set('Content-Type', 'application/vnd.ms-excel')

  readStream.pipe(response)
}
