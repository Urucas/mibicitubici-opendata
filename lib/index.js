import request from 'request'
import cheerio from 'cheerio'

const endpoint = 'http://www.mibicitubici.gob.ar/estacione.aspx'
export default function api() {
  return new Promise( (resolve, reject) => {
    request({
      uri: endpoint
    }, (err, body, response) => {
      if(err != null) return reject(err)
      response = response.replace(/<!\[CDATA\[([^\]]+)]\]>/ig, "");
      let html = cheerio.load(response)
      let scripts = html('script')
      for(let i=0;i<scripts.length;i++) {
        let script = scripts[i]
        let child = script.children
        if(!child.length) continue;
        let data = child[0].data;
        if(!data) continue;
        if(data.indexOf("estacoes") == -1) continue;
        if(data.indexOf("//<![CDATA[") == -1) continue;
        data = data.replace("//<![CDATA[","")
        data = data.replace("//]]>","")
        data = data.replace("var estacoes =","")
        try {
          let estaciones = eval(data)
          return resolve({estaciones:estaciones})
        }catch(e) {
          return reject(e)
        }
      }
      reject(new Error("Ha ocurrido un error al intentar obtener la informacion de las estaciones"))
    })
  })
}
