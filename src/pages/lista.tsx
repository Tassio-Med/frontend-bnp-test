/* 
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

/* import { useContext, useEffect } from 'react';
import styles from '@/styles/lista.module.css';
import { UserContext } from './context-api';

export default function Lista() {
  const { users, getUsersList } = useContext(UserContext);
  console.log('Usuários iniciais:', users);
  useEffect(() => {
    if (!users || users.length === 0) {
      console.log('Buscando usuários...');
      getUsersList();
    }
  }, [getUsersList, users]);

  console.log('Usuários após busca:', users);

  if (!users || users.length === 0) {
    return <div>Ainda não há usuários cadastrados.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de usuários</h2>

        <div data-list-container>
          {users.map((user, index) => (
            <div key={`${user.id}_${index}`} data-list-item>
              ID {user.id} - {user.name} ({user.email})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} */

// lista.tsx
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

