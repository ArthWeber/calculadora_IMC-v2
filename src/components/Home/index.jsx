import React from "react";
import styles from './Home.module.css'; // importa como objeto

function Home({ username, setUsername }) {
    return (
        <div className={styles.home}>
            <h1 className={styles.home__title}>Bem-vindo à Calculadora de IMC</h1>
            <p className={styles.textInfo}>
                O Índice de Massa Corporal (IMC) é uma métrica usada para avaliar
                se o peso de uma pessoa está adequado em relação à sua altura,
                ajudando a estimar a quantidade de gordura corporal e identificar
                possíveis riscos à saúde. Profissionais da saúde utilizam o IMC
                para classificar o peso e avaliar o risco de doenças como obesidade,
                desnutrição, diabetes tipo 2 e hipertensão. No entanto, ele não
                diferencia massa muscular de gordura, podendo não refletir com
                precisão a composição corporal de atletas ou pessoas com alta
                musculatura.
            </p>
            <h3 className={styles.subtitle}>
                Para garantir que sua saúde está em dia,
                <span className={styles.highlight}> sempre busque ajuda com um profissional da área.</span>
            </h3>

            <p className={styles.textInfo}>Para começar, por favor, digite seu nome:</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu nome"
            />
        </div>
    );
}

export default Home;
