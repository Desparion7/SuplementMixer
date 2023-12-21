'use client';
import { Inter } from 'next/font/google';
import Toast from '@/components/toaster';
import './globals.css';
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	return (
		<html lang='pl'>
			<body className={`${inter.className} min-h-screen `}>
				<Toast />
				{pathName === '/rejestracja' || pathName === '/logowanie' ? (
					<Logo />
				) : (
					<Navbar />
				)}

				<div className='px-24'>{children}</div>
			</body>
		</html>
	);
}
