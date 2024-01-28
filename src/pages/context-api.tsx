/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */


import { useState } from 'react';
import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import { useUser } from './context/user-context';

interface ContextApiProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

export default function ContextApi({ onSuccess, onError }: ContextApiProps) {
  const { users } = useUser(); 
  const [messages, setMessages] = useState<Array<IToastMessage>>([]);

  function handleSuccessButtonClick() {
    const successMessage = 'Mensagem de sucesso';
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), message: successMessage, type: 'success' },
    ]);

    if (typeof onSuccess === 'function') {
      onSuccess(successMessage);
    }
  }

  function handleErrorButtonClick() {
    const errorMessage = 'Mensagem de erro';
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), message: errorMessage, type: 'error' },
    ]);

    if (typeof onError === 'function') {
      onError(errorMessage);
    }
  }

  const handleCloseToast = (key: string) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== key));
  };

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles['toast-container']}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} onClose={() => handleCloseToast(message.id)} />
        ))}
      </div>
    </>
  );
}
