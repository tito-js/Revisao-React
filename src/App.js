import React, { useState } from "react";

function App() {
  const [credito, setCredito] = useState(155);

  function adicionaCredito() {
    setCredito(credito + 1000);
  }

  function compraPassagem(valor) {
    if (credito < valor) {
      alert("Você não possui créditos para comprar esta passagem!");
      return;
    }
    setCredito(credito - valor);
    alert("Passagem comprada com sucesso!");
  }

  return (
    <div>
      <h1>Gabszito Passagens</h1>
      <p>Conheça os mundos pelo melhor preço!</p>

      <button>Contato</button>
      <button onClick={() => adicionaCredito()}>Adicionar Crédito</button>

      <p>Seu crédito é de R$ {credito}</p>

      <p>
        California - R$1200{" "}
        <button onClick={() => compraPassagem(1200)}>Comprar</button>
      </p>
      <p>
        Londres - R$1800{" "}
        <button onClick={() => compraPassagem(1800)}>Comprar</button>
      </p>
    </div>
  );
}

export default App;
