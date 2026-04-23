'use client'

import React, { useState } from "react";
import GenerateShortUrl from "./actions";

export default function Home() {
  const [url, setUrl] = useState('')
  const [path, setPath] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result = await GenerateShortUrl(url, path.trim());
    
    if(result.shortUrl) {
      const newUrl = window.location.origin+'/'+result.shortUrl
      setShortUrl(newUrl);
      setCopied(false);
      setIsError(false);
    } else {
      setIsError(true);
      if (result.error) {
        setErrorMessage(result.error);
      } else {
        setErrorMessage("Ocorreu um erro ao encurtar a URL.");
      }
    }
    setLoading(false);
  }

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'path') {
      setPath(e.target.value)
    } else if(e.target.id === 'url') {
      setUrl(e.target.value)
    }
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
          <div>
            <input onChange={handleUpdate} value={url} type="url" name="url" id="url" placeholder="Insira a sua URL aqui" required/>
            <button type="submit" className="desktop" disabled={loading}>
              {loading ? 'Encurtando...' : 'Encurtar'}
            </button>
          </div>
          <div id="path-input">
            <label>Caminho (Opcional):</label>
            <input onChange={handleUpdate} value={path} type="text" name="path" id="path" placeholder="Insira o Caminho Personalizado"/>
          </div>
          <button type="submit" className="mobile" disabled={loading}>
              {loading ? 'Encurtando...' : 'Encurtar'}
          </button>
        </form>
        <div className="result">
          {shortUrl==='' ? <p id="url-none">Sua URL aparecerá aqui</p> : <a href={shortUrl} target="blank" id="url-result">{shortUrl}</a>}
          <button onClick={copy} disabled={shortUrl===''} id="copy">{copied ? 'Copiado!' : 'Copiar'}</button>
        </div>
        <div className="error">
          {isError && <p id="error">{errorMessage}</p>}
        </div>
      </main>

      <footer className="container">
        <p>@ 2026 Denis Lindner, Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
