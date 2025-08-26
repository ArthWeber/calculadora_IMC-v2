import React from 'react';
import styles from './Result.module.css'; // importa como objeto

const Result = ({ username, height, weight }) => {
    const calculateIMC = () => {
        const heightNumber = parseFloat(height);
        const weightNumber = parseFloat(weight);
        return weightNumber / (heightNumber * heightNumber);
    };

    const imc = calculateIMC();
    const imcCategory = imc < 18.5 ? 'Abaixo do peso' :
        imc >= 18.5 && imc < 24.9 ? 'Peso normal' :
            imc >= 25 && imc < 29.9 ? 'Sobrepeso' : 'Obesidade';

    return (
        <div className={styles.result}>
            <h2 className={styles.title}>Resultado do IMC</h2>
            <p className={styles.text}>Olá, {username}!</p>
            <p className={styles.text}>Com base nas informações fornecidas:</p>
            <ul className={styles.list}>
                <li>Altura: {height} m</li>
                <li>Peso: {weight} kg</li>
            </ul>
            <h3 className={styles.subtitle}>Seu IMC é: {imc.toFixed(2)}</h3>
            <p className={styles.text}>Categoria: {imcCategory}</p>
            <p className={styles.text}>
                Lembre-se: o IMC é uma estimativa. Para avaliar melhor sua saúde, consulte um profissional de saúde!
            </p>
        </div>
    )
}

export default Result;
