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
			<DropdownMenu>
				<DropdownMenuTrigger className='cursor-pointer' asChild>
					<button className='flex items-center gap-2 border-2 border-mainColor p-3 rounded-full focus:bg-green-200 outline-none'>
						<FaRegUser />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='min-w-56 p-4'>
					<DropdownMenuLabel>Moje Konto</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						{session?.user && (
							<DropdownMenuItem className='hover:bg-green-500 cursor-pointer z-100'>
								<Link href={'/konto'}>Panel konta</Link>
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
	);
};

export default MobileNavbar;
