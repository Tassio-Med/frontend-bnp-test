/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { IUserCreate } from '@/types/user.d';
import { useUser } from '@/pages/context/user-context';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { addUser, users } = useUser();

  if (req.method === 'POST') {
    try {
      const userData: IUserCreate & { [key: string]: any } = req.body;

      if (!userData?.name || !userData?.email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });
      }

      const newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
      };

      addUser(newUser);

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
