import React from "react";
import styles from './Home.module.css'; // importa como objeto

function Home({ username, setUsername }) {
    return (
        <div className={styles.home}>
            <h1 className={styles.home__title}>Bem-vindo à Calculadora de IMC</h1>
            <p className={styles.textInfo}>
                O Índice de Massa Corporal (IMC) é uma métrica usada para avaliar...
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
