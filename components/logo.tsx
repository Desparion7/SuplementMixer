import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href={'/'} className='w-[60%] lg:w-[30%] h-[100%] relative'>
			<Image
				src='/logo.PNG'
				width={0}
				height={0}
				alt='logo'
				sizes='50vw'
				style={{ width: '100%', height: 'auto' }} 
			/>
		</Link>
	);
};

export default Logo;
