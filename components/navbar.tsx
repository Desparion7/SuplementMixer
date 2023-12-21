import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='flex items-center px-24 py-6 pb-5 justify-between border-2 border-transparent border-b-gray-300'>
			<Logo />
			<div className='flex items-center lg:min-w-[30%]'>
				<input
					className='p-1 min-w-full focus:outline-none text-sm border-2 border-gray-300 border-r-transparent'
					placeholder='Wyszukaj suplementu'
				/>
				<button
					className='p-2 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-sm hover:text-black transition font-semibold border-2 border-l-transparent'
					type='button'
				>
					<CiSearch />
				</button>
			</div>
			<div className='flex justify-end gap-10 uppercase font-semibold'>
				<Link href={'/'}>Lista suplementów</Link>
				<Link href={'/logowanie'}>
					<span className='flex items-center gap-2'>
						<FaRegUser /> Moje Konto
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

// Witaj w naszej innowacyjnej aplikacji do układania suplementów diety – Twojego osobistego przewodnika po drodze do zdrowego życia! W dzisiejszym zabieganym świecie, dbanie o odpowiednią ilość składników odżywczych staje się wyzwaniem. Coraz trudniej jest dostarczyć organizmowi wszystkich niezbędnych minerałów i witamin wyłącznie poprzez codzienną dietę.

// Nasza aplikacja powstała z myślą o Tobie, aby ułatwić Ci zadanie w utrzymaniu równowagi i zdrowia. Wraz z postępem technologii i zmieniającym się stylem życia, stajemy przed wyzwaniem zapewnienia organizmowi kompleksowego wsparcia. Suplementacja diety staje się coraz bardziej popularnym rozwiązaniem, pomagając nam uzupełnić braki składników odżywczych i wspomagać nasze ciało w utrzymaniu optymalnego stanu zdrowia.

// Dlaczego suplementacja jest istotna? Ponieważ żywność, którą spożywamy, nie zawsze dostarcza nam wystarczającej ilości niezbędnych składników odżywczych. Zanieczyszczenia środowiskowe, intensywna uprawa roślin, czy też specyfika naszej diety mogą prowadzić do niedoborów. Nasza aplikacja pozwala Ci dostosować suplementację do Twoich indywidualnych potrzeb, uwzględniając Twój styl życia, preferencje żywieniowe i cele zdrowotne.

// Jak to działa? Proste! Po zalogowaniu się do aplikacji, odpowiadasz na kilka pytań dotyczących Twojej diety, preferencji żywieniowych, aktywności fizycznej oraz celów zdrowotnych. Na podstawie uzyskanych informacji, nasza aplikacja generuje spersonalizowany plan suplementacyjny, pomagając Ci zadbać o równowagę w organizmie.

// Nie czekaj dłużej – dołącz do naszej społeczności dbającej o zdrowie i doświadcz, jak prosta i skuteczna może być suplementacja diety z pomocą naszej aplikacji. Zainwestuj w swoje zdrowie już dziś!
