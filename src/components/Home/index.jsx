import React from "react";

function Home({ username, setUsername }) {

    return (
        <div>
            <h1>Bem-vindo à Calculadora de IMC</h1>
            <p>O Índice de Massa Corporal (IMC) é uma medida para avaliar se uma pessoa está no peso ideal para sua altura.</p>
            <p>Para começar, digite seu nome:</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu nome" />
        </div>
    );
}

export default Home;