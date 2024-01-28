/* 
	Modal

	- Ao clicar no wrapper do modal, o modal deve ser fechado, porém esta ação deve ser ignorada caso o usuário clique em qualquer elemento dentro do modal
*/

import React from 'react';
import { BaseModal } from '../BaseModal';
import { ModalProps } from '@/types/modal-props';

export const Modal: React.FC<ModalProps> = ({ ...props }) => {
  return <BaseModal {...props} />;
};
