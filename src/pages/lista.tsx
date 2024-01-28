/* 
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect } from 'react';
import styles from '@/styles/lista.module.css';
import { useUser } from './context/user-context';

export default function Lista() {
  const { users } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de usuários</h2>

        <div data-list-container>
          {users.map((user) => (
            <div key={user.id} data-list-item>{`ID ${user.id} - ${user.name} (${user.email})`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

