/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';
import { useUser } from './context/user-context';

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const { addUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  /* const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      const newUser = await response.json();
      addUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };
 */

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erro ao cadastrar usuário: ${errorMessage}`);
      }
  
      const newUser = await response.json();
      addUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Nome é obrigatório</span>}
          <input
            type="email"
            placeholder="E-mail"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email é obrigatório</span>}

          <button type="submit" data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
