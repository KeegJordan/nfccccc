const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

GET request to webServiceURL/version/passes/passTypeIdentifier/serialNumber
app.get('/v1/passes/:passTypeIdentifier/:serialNumber/personalize', function (req, res) {
   console.log("received get request")
   console.log(json.passTypeIdentifier)
   console.log(json.serialNumber)
   res.send("hallo")
})

app.post('/v1/passes/:passTypeIdentifier/:serialNumber/personalize', function (req, res) {
   console.log("received post request")
   json = req.body
   console.log(json.passTypeIdentifier)
   console.log(json.serialNumber)
   res.send(req.params)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
