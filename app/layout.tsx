import { Inter } from 'next/font/google';
import Toast from '@/components/toaster';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} min-h-screen `}>
				<Toast />
				<Navbar />
				<div className='px-24'>{children}</div>
			</body>
		</html>
	);
}
