import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='flex flex-col justify-center items-center min-h-[50vh] gap-3'>
			<h2 className='text-2xl'>404</h2>
			<h2>Nie ma takiej strony.</h2>
			<p>Przykro mi, strona którą chcesz odwiedzić nie istnieje.</p>
			<Link href='/'>
				<button className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'>
					Wróć na stronę główną
				</button>
			</Link>
		</div>
	);
};

export default NotFound;
