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
      
      if(data.shortUrl) {
        return {shortUrl: data.shortUrl};
      } else if(data.statusCode === 429) {
        return {error: 'Erro ao encurtar URL. Muitas tentativas seguidas. Tente novamente mais tarde.'}
      } else {
        return {error: 'Erro ao encurtar URL!'}
      }
    } catch {
        return {error: 'Erro ao encurtar URL!'};
    }
}