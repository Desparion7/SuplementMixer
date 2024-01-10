import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'SuplementMixer',
	description:
		'Aplikacja do zarządzania suplementami diety i baza wiedzny na temat suplementów',
};

export default async function Home() {
	return (
		<main className='flex flex-col  min-h-[100vh] lg:min-h-[82vh] items-center lg:items-end justify-center relative bg-transparent'>
			<div className='w-[100%] h-[100%] absolute'>
				<Image
					className='z-1'
					src='/welcome.PNG'
					fill
					sizes='100vh'
					alt='tło'
					style={{
						objectFit: 'cover',
					}}
				/>
			</div>
			<section className='w-[80%] lg:w-[55%] bg-white bg-opacity-60 p-5 z-10 lg:mr-20 text-md sm:text-xl '>
				<p className='mb-10'>
					Witaj w naszej innowacyjnej aplikacji do układania
					suplementów diety – Twojego osobistego przewodnika po drodze
					do zdrowego życia! W dzisiejszym zabieganym świecie, dbanie
					o odpowiednią ilość składników odżywczych staje się
					wyzwaniem. Coraz trudniej jest dostarczyć organizmowi
					wszystkich niezbędnych minerałów i witamin wyłącznie poprzez
					codzienną dietę.
				</p>
				<p className=' mb-10'>
					Nie czekaj dłużej – dołącz do naszej społeczności dbającej o
					zdrowie i doświadcz, jak prosta i skuteczna może być
					suplementacja diety z pomocą naszej aplikacji. Zainwestuj w
					swoje zdrowie już dziś!
				</p>
				<Link href='/rejestracja'>
					<button className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'>
						Dołącz teraz
					</button>
				</Link>
			</section>
		</main>
	);
}
