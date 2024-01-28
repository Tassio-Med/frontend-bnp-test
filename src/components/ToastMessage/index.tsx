/* import { useState } from 'react';
import { ToastMessageProps } from '@/types/toast-message-props';
import styles from './style.module.css';

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data, onClose }) => {
	const [isVisible, setIsVisible] = useState(true);


	const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

	return (
		<>
			{isVisible && (
				<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
					<span data-content>{data.message}</span>
					<span data-close onClick={handleClose}>╳</span>
				</div>
			)}
		</>
	);
};
 */

// ToastMessage.tsx
import { useState } from 'react';
import { IToastMessage } from '@/types/toast-message.d';
import styles from './style.module.css';

type ToastMessageProps = {
  content: IToastMessage;
  onClose: () => void; // Adicionado o callback onClose
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose(); // Chamando o callback onClose
  };

  return visible ? (
    <div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
      <span data-content>{data.message}</span>
      <span data-close onClick={handleClose}>
        ╳
      </span>
    </div>
  ) : null;
};
