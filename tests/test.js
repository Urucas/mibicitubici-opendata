import api from '../lib/index.js' 

describe("Test mibicitubici service api", () => {
  
  it("Test API returns a promise", (done) => {
    let promise = api()
    if(promise instanceof Promise.prototype.constructor)
      done()
    else 
      throw new Error("Api is not returning a valid promise, "+promise);
  })

  it("test API promise result", (done) => {
    let promise = api()
    promise.then( (estaciones) => {
      
    })
  })
})
