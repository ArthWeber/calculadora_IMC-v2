import React from 'react';

const HeightInput = ({ height, setHeight, username }) => {

    const handleHeightChange = (e) => {
        const formattedHeight = e.target.value.replace(',', '.'); // Ajuste para vírgula
        setHeight(formattedHeight);
    };

    return (
        <div>
            <h2>Seja bem-vindo, {username}!</h2>
            <p>Por favor, me informe sua altura (ex: 1,70):</p>
            <input type="text"
                value={height}
                onChange={handleHeightChange}
                placeholder="Sua altura" />
        </div>
    );
}

export default HeightInput;