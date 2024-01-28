export interface UserContextProps {
  users: IUser[];
  addUser: (user: IUser) => void;
}