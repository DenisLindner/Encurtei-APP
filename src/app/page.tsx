'use client'

import React, { useState } from "react";
import GenerateShortUrl from "./actions";

export default function Home() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = await GenerateShortUrl(url);
    
    if(result.shortUrl) {
      const newUrl = window.location.origin+'/'+result.shortUrl
      setShortUrl(newUrl);
      setCopied(false);
    } else {
      alert(result.error)
    }
  }

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const copy = async () => {
    navigator.clipboard.writeText(shortUrl).then(() => setCopied(true)).catch(err => alert('Erro ao copiar:' + err))
  }

  return (
    <div className="content">
      <main className="container">
        <header>
          <h1>Encurtei</h1>
          <p>Encurte qualquer link com a nossa ferramenta</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleUpdate} value={url} type="url" name="url" id="url" placeholder="Insira a sua URL aqui" required/>
          <button type="submit">Encurtar</button>
        </form>
        <div className="result">
          {shortUrl==='' ? <p id="url-none">Sua URL aparecerá aqui</p> : <a href={shortUrl} target="blank" id="url-result">{shortUrl}</a>}
          {shortUrl!=='' ? <button onClick={copy} id="copy">{copied ? 'Copiado!' : 'Copiar'}</button> : <button id="copy" disabled>Copiar</button> }
        </div>
      </main>

      <footer className="container">
        <p>@ 2026 Denis Lindner, Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
