'use server'

export default async function GenerateShortUrl(url: string) {
    const backendUrl = process.env.BACKEND_URL as string
    try {
      const res = await fetch(`${backendUrl}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({originalUrl: url})
      })

      const data = await res.json()

      console.log(data);
      
      if(data.shortUrl) {
        return {shortUrl: data.shortUrl};
      } else {
        return {error: 'Erro ao encurtar URL!'}
      }
    }catch(err) {
        console.error('Error: '+err)
        return {error: 'Erro ao encurtar URL!'};
    }
}