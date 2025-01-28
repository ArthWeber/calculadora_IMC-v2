import { useState } from 'react';
import Home from './components/Home';
import { GrFormNextLink } from "react-icons/gr";
import HeightInput from './components/Inputs/HeightInput';
import WeightInput from './components/Inputs/WeightInput';
import Result from './components/Result';
import './global.css';

function App() {
  const [step, setStep] = useState(1); // Estado para controlar a etapa do formulário
  const [username, setUsername] = useState(''); // Estado para armazenar o nome
  const [height, setHeight] = useState(''); // Estado para armazenar a altura
  const [weight, setWeight] = useState(''); // Estado para armazenar o peso

  const handleNextStep = () => {
    setStep(step + 1); // Avança para o próximo passo
  };

  const handlePreviousStep = () => {
    setStep(step - 1); // Volta para o passo anterior
  };

  const handleReset = () => {
    setStep(1); // Reinicia o formulário
    setUsername('');
    setHeight('');
    setWeight('');
  }



  const handleSubmit = () => {
    // Validar os campos e avançar para o resultado
    if (username && height && weight) {
      setStep(4); // Exibir resultado
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div>
      {step === 1 && (
        <div className="container">
          <Home username={username} setUsername={setUsername} />
          <button onClick={handleNextStep}>Continuar
            <GrFormNextLink size={22} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="container">
          <HeightInput height={height} setHeight={setHeight} username={username} />
          <button onClick={handleNextStep}>Continuar
            <GrFormNextLink size={22} />
          </button>
          <button onClick={handlePreviousStep}>Voltar</button>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      )}

      {step === 3 && (
        <div className="container">
          <WeightInput weight={weight} setWeight={setWeight} />
          <button onClick={handleSubmit}>Mostrar resultado</button>
          <button onClick={handlePreviousStep}>Voltar</button>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      )}

      {step === 4 && (
        <div className="container">
          <Result username={username} height={height} weight={weight} />
          <button onClick={handlePreviousStep}>Voltar</button>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      )}
    </div>
  )
}

export default App
