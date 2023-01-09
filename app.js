const express = require('express')
const qr = require('qr-image')
const app = express()

app.get('/qr', (req, res) => {
  const { url } = req.query
  console.log(url)
  if (!url) {
    return res.status(400).send({ error: 'Missing URL parameter' })
  }

  const qrCode = qr.imageSync(url, { type: 'svg' })
  res.type('svg')
  res.send(qrCode)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`QR code API listening on port ${port}!`)
})
