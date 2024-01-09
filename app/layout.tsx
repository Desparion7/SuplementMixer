'use client';
import { Inter } from 'next/font/google';
import Toast from '@/components/toaster';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import { NextUIProvider } from '@nextui-org/react';
import AuthProvider from '@/context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} min-h-screen `}>
				<AuthProvider>
					<NextUIProvider>
						<Toast />
						<Navbar />
						<div>{children}</div>
					</NextUIProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
