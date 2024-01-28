/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { useUser } from '@/pages/context/user-context';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { users } = useUser();

  if (req.method === 'GET') {
    try {
      return res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
