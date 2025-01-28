import React from 'react';

const WeightInput = ({ weight, setWeight }) => {

    const handleWeightChange = (e) => {
        const formattedWeight = e.target.value.replace(',', '.'); // Ajuste para vírgula
        setWeight(formattedWeight);
    };

    return (
        <div>
            <h2>Agora, informe o seu peso (ex: 69,2):</h2>
            <input
                type="text"
                value={weight}
                onChange={handleWeightChange}
                placeholder="Seu peso" />
        </div>
    )
}

export default WeightInput;
