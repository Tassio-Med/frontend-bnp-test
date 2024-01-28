import { useState, useEffect } from 'react';
import { CounterProps } from '@/types/counter-props';


export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const onCounterMount = () => {
    console.log('Counter montado');
    document.body.style.backgroundColor = '#ff7b00'; 
  };

  const onCounterUnmount = () => {
    console.log('Counter desmontado');
    document.body.style.backgroundColor = '#ffa200'; 
  };

  const onCounterUpdate = (value: number) => {
    console.log('Counter atualizado com valor:', value);

    if (value === 10) {
      onCounterUnmount();
      alert('O contador atingiu o valor 10! O componente será desmontado.');
    }
  };

  useEffect(() => {
    onCounterMount();

    return () => {
      onCounterUnmount();
    };
  }, []);

  useEffect(() => {
    onCounterUpdate(count);
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
