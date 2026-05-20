  import React from 'react'

function CardJogador() {
  const nome = "Neymar Jr"
  const hobby = "Jogar CS2 / Pôquer"
  const filme = "Batman"
  const curso = "Pro Player / Atacante"
  const cor = "Dourado"

  function mensagem() {
    alert("Você seguiu " + nome)
  }

  return (
    <div className="card">
      <img
        src="https://www.lequipe.fr/_medias/img-photo-jpg/soccer-football-champions-league-round-of-16-first-leg-real-madrid-vs-paris-st-germain-santiag/1500000000910906/230:39,2300:1419-828-552-75/0c1f7.jpg"
        alt="Foto do Neymar"
        className="card-img"
      />

      <h1 className="card-h1">{nome}</h1>

      <p className="card-p">
        <strong className="card-strong">Hobby:</strong> {hobby}
      </p>

      <p className="card-p">
        <strong className="card-strong">Filme favorito:</strong> {filme}
      </p>

      <p className="card-p">
        <strong className="card-strong">Curso:</strong> {curso}
      </p>

      <p className="card-p">
        <strong className="card-strong">Cor favorita:</strong> {cor}
      </p>

      <button onClick={mensagem} className="card-button">
        Seguir
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="flex-container">
      <CardJogador />
      <CardJogador />
      <CardJogador />
    </div>
  )
}


export default App