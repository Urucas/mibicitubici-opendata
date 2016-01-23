import api from '../lib/index.js' 
import isPlainObj from 'is-plain-obj'

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
})
