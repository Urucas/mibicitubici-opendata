import request from 'request'
import cheerio from 'cheerio'

const endpoint = 'http://www.mibicitubici.gob.ar/estacione.aspx'
export default function api() {
  return new Promise( (reject, resolve) => {
    request({
      uri: endpoint
    }, function(err, body, response){
      if(err != null) return reject(err)
      var html = cheerio.load(response)
      console.log(html)
      for(let i=0;i<scripts.length;i++) {
        
      }
      // console.log(body)
    })
  })
}
