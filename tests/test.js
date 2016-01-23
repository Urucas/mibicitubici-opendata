import api from '../lib/index.js' 
import server from '../lib/server.js'
import isPlainObj from 'is-plain-obj'
import request from 'request'

describe("Test mibicitubici service api", () => {
  
  it("Test API returns a promise", (done) => {
    let promise = api()
    if(promise instanceof Promise.prototype.constructor)
      done()
    else 
      throw new Error("Api is not returning a valid promise, "+promise)
  })

  it("test API promise result", (done) => {
    let promise = api()
    promise.then( (data) => {
      if(!isPlainObj(data))
        throw new Error("Error parsing result, "+data)
      if(!data.estaciones)
        throw new Error("Error parsing result, "+data)
      done()
    })
  })

  it("Test server response", (done) => {
    let promise = api()
    promise.then( (data) => {
      let app = server(5000)
      request.get("http://localhost:5000", (err, body, response) => {
        if(err) throw new Error(err.message)
        let estaciones = eval(response)
        if(!estaciones) throw new Error("Error parsing data, "+response)
        let strEstaciones = JSON.stringify(estaciones)
        let strData = JSON.stringify(data.estaciones)
        if(strEstaciones != strData) throw new Error("Error data response", +response)
        done()
      })
    })
  })
})
