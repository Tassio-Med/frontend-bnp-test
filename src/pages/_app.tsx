import type { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from './context/user-context';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>
			<Component {...pageProps} />
		</UserProvider>
	);
}


