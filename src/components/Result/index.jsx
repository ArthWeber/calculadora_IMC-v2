import React from 'react';
import './Result.module.css';

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
        <div className='result'>
            <h2>Resultado do IMC</h2>
            <p>Olá, {username}!</p>
            <p>Com base nas informações fornecidas:</p>
            <ul>
                <li>Altura: {height} m</li>
                <li>Peso: {weight} kg</li>
            </ul>
            <h3>Seu IMC é: {imc.toFixed(2)}</h3>
            <p>Categoria: {imcCategory}</p>
            <p>
                Lembre-se: o IMC é uma estimativa. Para avaliar melhor sua saúde, consulte um profissional de saúde!
            </p>
        </div>
    )
}

export default Result;



