'use server'

export default async function GenerateShortUrl(url: string, path: string) {
    const backendUrl = process.env.BACKEND_URL as string
    try {
      const object = (path === '' ? {originalUrl: url} : {originalUrl: url, path: path})
      const res = await fetch(`${backendUrl}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(object)
      })

      const data = await res.json()
      
      if(data.shortUrl) {
        return {shortUrl: data.shortUrl};
      } else if(data.statusCode === 429) {
        return {error: 'Erro ao encurtar URL. Muitas tentativas seguidas. Tente novamente mais tarde.'}
      } else if(data.statusCode === 409){
        return {error: 'Erro ao encurtar URL. '+data.message}
      } else {
        return {error: 'Erro ao encurtar URL.'+data.message.map((item: string) => ' '+item.trimEnd())+'.'}
      }
    } catch {
        return {error: 'Erro ao encurtar URL!'};
    }
}