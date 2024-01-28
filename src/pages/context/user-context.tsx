import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { IUser } from '@/types/user';
import { UserContextProps } from '@/types/user-context';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: 'José Henrique', email: 'jose@email.com' },
      { id: 2, name: 'Bruna Santana', email: 'bruna@email.com' },
    ]);
  }, []);

  const addUser = (user: IUser) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
