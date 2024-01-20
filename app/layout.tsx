'use client';
import Toast from '@/components/toaster';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import AuthProvider from '@/context/AuthProvider';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<AuthProvider>
					<Toast />
					<Navbar />
					<div>{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}
