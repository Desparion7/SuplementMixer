'use client';
import React from 'react';
import Logo from '../logo';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import NavLinksGroup from './navLinksGroup';
import MobileNavbar from './mobileNavbar';
import { signOut, useSession } from 'next-auth/react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { links } from '@/lib/data';

const Navbar = () => {
	const { data: session } = useSession();
	const router = useRouter();

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
				{session?.user ? (
					<div className='hidden lg:flex justify-end gap-10 uppercase font-semibold border-2 border-green-100 rounded-md'>
						<DropdownMenu>
							<DropdownMenuTrigger className='focus:outline-none'>
								<button className='hidden lg:flex items-center gap-2 border-2 border-mainColor p-3 rounded-full max-w-[100%] truncate '>
									<>
										<FaRegUser />
										<span>Moje Konto</span>
									</>
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='min-w-56 p-4'>
								<DropdownMenuLabel>
									Moje Konto
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									{session?.user && (
										<DropdownMenuItem className='hover:bg-green-500 cursor-pointer z-100'>
											<Link href={'/konto'}>
												Panel konta
											</Link>
										</DropdownMenuItem>
									)}
									<DropdownMenuSeparator />
									<DropdownMenuSub>
										<div className='flex items-center justify-center'>
											<input
												className='p-1 focus:outline-none text-sm border-2 border-gray-300 '
												placeholder='Wyszukaj suplementu'
											/>
											<button
												className='p-2 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-sm hover:text-black transition font-semibold border-2 border-l-transparent'
												type='button'
											>
												<CiSearch />
											</button>
										</div>
									</DropdownMenuSub>
									<DropdownMenuSeparator />
									<DropdownMenuSub>
										{session?.user ? (
											<button
												className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'
												onClick={() => {
													signOut();
												}}
											>
												Wyloguj
											</button>
										) : (
											<button
												onClick={() => {
													router.push('/logowanie');
												}}
												className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'
											>
												Logowanie
											</button>
										)}
									</DropdownMenuSub>
									<DropdownMenuSeparator />
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<button
						onClick={() => {
							router.push('/logowanie');
						}}
						className='hidden lg:flex text-sm p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'
					>
						Logowanie
					</button>
				)}
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
