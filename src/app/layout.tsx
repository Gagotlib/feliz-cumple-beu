// src/app/layout.tsx
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ReduxProvider from './ReduxProvider'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = {
	title: 'Feliz cumpleaños Beu',
	description: 'Regalito de cumpleaños'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
