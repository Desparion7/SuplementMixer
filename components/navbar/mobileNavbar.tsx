import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const MobileNavbar = () => {
	const { data: session } = useSession();
	const router = useRouter();
	return (
		<div className='flex lg:hidden justify-end gap-10 uppercase font-semibold'>
			<Dropdown className=' justify-end gap-12 uppercase font-semibold'>
				<DropdownTrigger className='focus:outline-none'>
					<button className='flex items-center gap-2 border-2 border-mainColor p-3 rounded-full'>
						<FaRegUser />
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
					aria-label='Menu mobilne użytkownika'
				>
					<DropdownItem key='account' aria-label='moje konto'>
						<Link href={'/konto'} className='block p-3'>
							Moje Konto
						</Link>
					</DropdownItem>
					<DropdownItem key='suplements' aria-label='suplementy'>
						<Link href={'/suplementy'} className='block p-3'>
							Suplementy
						</Link>
					</DropdownItem>
					<DropdownItem
						key='search'
						isReadOnly
						aria-label='wyszukiwanie'
						className='data-[hover=true]:bg-transparent'
					>
						<div className='flex items-center w-[80%]'>
							<input
								className='p-1 min-w-full focus:outline-none text-sm border-2 border-gray-300'
								placeholder='Wyszukaj suplementu'
							/>
							<button
								className='p-2 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-sm hover:text-black transition font-semibold border-2 border-l-transparent'
								type='button'
							>
								<CiSearch />
							</button>
						</div>
					</DropdownItem>
					<DropdownItem
						key='auth'
						aria-label='logowanie'
						className='data-[hover=true]:bg-transparent'
					>
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
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default MobileNavbar;
