import express from 'express'
import api from './index.js'
import http from 'http'

export default function server(port) {
  let app = express()
  app.get("/", (req, res) => {
    let promise = api()
    promise.then( (data) => {
      res.json(data.estaciones)
    })
  })
  return app.listen(port)
}


