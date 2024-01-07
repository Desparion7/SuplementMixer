import type { Metadata } from 'next';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'SuplementMixer',
	description:
		'Aplikacja do zarządzania suplementami diety i baza wiedzny na temat suplementów',
};

export default async function Home() {
	const session = await getServerSession(options);

	// if (!session) redirect('/logowanie');
	return (
		<main className='flex h-[82vh] items-end  flex-col justify-center '>
			<Image
				className='-z-10 w-auto h-auto  '
				src='/welcome.PNG'
				fill
				alt='tło'
				style={{
					objectFit: 'cover',
				}}
			/>
			{/* <section className=' w-[55%] bg-gray-200 bg-opacity-60 p-5'>
				<p className='text-xl mb-10'>
					Witaj w naszej innowacyjnej aplikacji do układania
					suplementów diety – Twojego osobistego przewodnika po drodze
					do zdrowego życia! W dzisiejszym zabieganym świecie, dbanie
					o odpowiednią ilość składników odżywczych staje się
					wyzwaniem. Coraz trudniej jest dostarczyć organizmowi
					wszystkich niezbędnych minerałów i witamin wyłącznie poprzez
					codzienną dietę.
				</p>
				<p className='text-xl mb-10'>
					Nie czekaj dłużej – dołącz do naszej społeczności dbającej o
					zdrowie i doświadcz, jak prosta i skuteczna może być
					suplementacja diety z pomocą naszej aplikacji. Zainwestuj w
					swoje zdrowie już dziś!
				</p>
				<Link href='logowanie'>
					<button className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-gray-300 transition font-semibold'>
						Dołącz teraz
					</button>
				</Link>
			</section> */}
		</main>
	);
}
