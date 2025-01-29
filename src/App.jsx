import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrFormNextLink, GrFormPreviousLink, GrPowerReset, GrPrint } from "react-icons/gr";
import Home from './components/Home';
import HeightInput from './components/Inputs/HeightInput';
import WeightInput from './components/Inputs/WeightInput';
import Result from './components/Result';
import './global.css';

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({ username: false, height: false, weight: false });

  // Função para avançar com validação
  const handleNextStep = () => {
    if (step === 1 && !username.trim()) {
      setErrors({ ...errors, username: true });
      alert('Por favor, digite seu nome.');
      return;
    }
    if (step === 2 && (!height.trim() || isNaN(height) || height <= 0)) {
      setErrors({ ...errors, height: true });
      alert('Por favor, informe uma altura válida.');
      return;
    }
    if (step === 3 && (!weight.trim() || isNaN(weight) || weight <= 0)) {
      setErrors({ ...errors, weight: true });
      alert('Por favor, informe um peso válido.');
      return;
    }
    setStep(step + 1);
  };

  // Função para reiniciar o formulário
  const handleReset = () => {
    setStep(1);
    setUsername('');
    setHeight('');
    setWeight('');
    setErrors({ username: false, height: false, weight: false });
  };

  // Função para imprimir o resultado
  const resultPrint = () => {
    window.print();
  }

  return (
    <div className="container">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="step"
          >
            <Home username={username} setUsername={setUsername} />
            {errors.username && <p className="error-text">Por favor, digite seu nome.</p>}
            <button onClick={handleNextStep}>
              Continuar <GrFormNextLink size={22} />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="step"
          >
            <HeightInput height={height} setHeight={setHeight} username={username} />
            {errors.height && <p className="error-text">Altura é obrigatória e deve ser válida.</p>}
            <div className="bttn">
              <button onClick={() => setStep(step - 1)}>
                <GrFormPreviousLink size={22} />
                Voltar
              </button>
              <button onClick={handleReset}><GrPowerReset size={22} /></button>
              <button onClick={handleNextStep}>
                Continuar <GrFormNextLink size={22} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="step"
          >
            <WeightInput weight={weight} setWeight={setWeight} />
            {errors.weight && <p className="error-text">Peso é obrigatório e deve ser válido.</p>}
            <div className="bttn">
              <button onClick={() => setStep(step - 1)}>
                <GrFormPreviousLink size={22} />
                Voltar
              </button>
              <button onClick={handleReset}><GrPowerReset size={22} /></button>
              <button onClick={handleNextStep}>
                Mostrar resultado
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="step"
          >
            <Result username={username} height={height} weight={weight} />
            <div className="bttn">
              <button onClick={() => setStep(step - 1)}>
                <GrFormPreviousLink size={22} />
                Voltar
              </button>
              <button onClick={handleReset}><GrPowerReset size={22} /></button>
              <button className='printBttn' onClick={resultPrint}><GrPrint size={22} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
