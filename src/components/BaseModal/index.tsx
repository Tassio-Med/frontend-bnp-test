import React from 'react';
import styles from './style.module.css';
import { ModalProps } from '@/types/modal-props';

export const BaseModal: React.FC<ModalProps> = ({ children, title, isOpen, ...props }) => {

  function handleCloseClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;

    if (
      target.closest('[data-modal-container]') === null ||
      target.closest('[data-modal-close]') !== null ||
      target.closest('[data-modal-cancel]') !== null
    ) {
      props.onClose?.('click', target);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') props.onClose?.('esc', e.target);
  }

  if (!isOpen) return null;

  return (
    <div
      data-modal-wrapper
      className={styles.wrapper}
      onClick={handleCloseClick}
      onKeyDown={handleKeyDown}
    >
      <div data-modal-container>
        <header data-modal-header>
          <h2>{title}</h2>
          <button data-modal-close onClick={handleCloseClick}>
            X
          </button>
        </header>

        {children}

        {!props.footer?.hidden && (
          <div data-modal-footer>
            <button data-modal-cancel onClick={handleCloseClick}>
              {props.footer?.cancelText ?? 'Cancelar'}
            </button>
            <button data-modal-confirm onClick={props.onConfirm} data-type="confirm">
              {props.footer?.confirmText ?? 'Confirmar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
