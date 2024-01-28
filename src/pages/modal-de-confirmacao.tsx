/*
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { ModalConfirmacao } from '@/components/ModalConfirmacao';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('Confirmado!');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}


	function renderModalContent() {
		return (
			<div data-modal-content className={styles['modal-form']}>
				<form onSubmit={() => false}>
					<div>
						<label htmlFor="input-name">Nome</label>
						<input type="text" id="input-name" placeholder="Insira um nome" />
					</div>

					<div>
						<label htmlFor="input-email">E-mail</label>
						<input type="email" id="input-email" placeholder="Insira um e-mail válido" />
					</div>

					<div>
						<label htmlFor="input-phone">Número de telefone</label>
						<input type="number" id="input-phone" placeholder="Insira seu número de contato" />
					</div>
				</form>
			</div>
		);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<ModalConfirmacao
				isOpen={modalIsOpen}
				title="Confirmação"
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}
				footer={{ confirmText: 'Criar usuário' }}
			>
				{renderModalContent()}
			</ModalConfirmacao>
		</>
	);
}
