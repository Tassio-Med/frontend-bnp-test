import React from 'react';
import { BaseModal } from '../BaseModal';
import { ModalProps } from '@/types/modal-props';

export const ModalConfirmacao: React.FC<ModalProps> = ({ ...props }) => {
  return <BaseModal {...props} />;
};
