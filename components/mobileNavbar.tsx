import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const MobileNavbar = () => {
	return (
		<div className='flex lg:hidden justify-end gap-10 uppercase font-semibold'>
			<Dropdown className=' justify-end gap-10 uppercase font-semibold'>
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
					<DropdownItem key='login' aria-label='logowanie'>
						<Link href={'/logowanie'} className='block p-3'>
							Logowanie
						</Link>
					</DropdownItem>
					<DropdownItem key='signup' aria-label='załóż konto'>
						<Link href={'/rejestracja'} className='block p-3'>
							Załóż konto
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
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default MobileNavbar;
