import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import NavLinksGroup from './navLinksGroup';
import MobileNavbar from './mobileNavbar';

const links = [
	{
		link: '#1',
		label: 'Według Kategorii',
		links: [
			{ link: '/', label: 'Witaminy' },
			{ link: '/', label: 'Minerały' },
			{ link: '/', label: 'Aminokwasy' },
			{ link: '/', label: 'Kwasy tłuszczowe' },
			{ link: '/', label: 'Enzymy' },
			{ link: '/', label: 'Probiotyki' },
			{ link: '/', label: 'Antyoksydanty' },
			{ link: '/', label: 'Suplementy ziołowe' },
		],
	},
	{
		link: '#2',
		label: 'Według Celu Suplementacji',
		links: [
			{ link: '/', label: 'Suplementy dla sportowców' },
			{ link: '/', label: 'Suplementy wspierające zdrowie serca' },
			{ link: '/', label: 'Suplementy na poprawę odporności' },
			{ link: '/', label: 'Suplementy dla zdrowia stawów' },
			{
				link: '/',
				label: 'Suplementy wspierające zdrowie skóry, włosów, paznokci',
			},
			{
				link: '/',
				label: 'Suplementy na poprawę koncentracji i funkcji umysłowych',
			},
		],
	},
	{
		link: '#3',
		label: 'Według Grupy Docelowej',
		links: [
			{ link: '/', label: 'Suplementy dla dorosłych' },
			{ link: '/', label: 'Suplementy dla dzieci' },
			{ link: '/', label: 'Suplementy dla kobiet w ciąży' },
			{ link: '/', label: 'Suplementy dla osób starszych' },
		],
	},
	{
		link: '#4',
		label: 'Według Formy Dawkowania',
		links: [
			{ link: '/', label: 'Tabletki' },
			{ link: '/', label: 'Kapsułki' },
			{ link: '/', label: 'Płyny' },
			{ link: '/', label: 'Proszki' },
		],
	},
];
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';

const Navbar = async () => {

	// if (!session) redirect('/logowanie');
	return (
		<nav className='flex flex-col px-4 sm:px-24 sm:py-4 pb-3  justify-between bg-white'>
			<div className='flex flex-row items-center justify-between min-h-[80px] '>
				<Logo />
				<div className='hidden lg:flex items-center  lg:min-w-[40%]'>
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
				<Dropdown className='hidden lg:flex justify-end gap-10 uppercase font-semibold'>
					<DropdownTrigger className='focus:outline-none '>
						<button className='hidden lg:flex items-center gap-2 border-2 border-mainColor p-3 rounded-full '>
							<FaRegUser /> <span>Moje Konto</span>
						</button>
					</DropdownTrigger>
					<DropdownMenu
						itemClasses={{
							base: [
								'rounded-md',
								'text-black',
								'transition-opacity',
								'data-[hover=true]:bg-green-100',
							],
						}}
						aria-label='Menu użytkownika'
					>
						<DropdownItem key='login'>
							<Link href={'/logowanie'} className='block p-3'>
								Logowanie
							</Link>
						</DropdownItem>
						<DropdownItem key='signup'>
							<Link href={'/rejestracja'} className='block p-3'>
								Załóż konto
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<MobileNavbar />
			</div>
			<div className='hidden lg:flex flex-row justify-center'>
				{links.map((group) => (
					<NavLinksGroup
						key={group.link}
						label={group.label}
						links={group.links}
					/>
				))}
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
