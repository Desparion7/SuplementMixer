import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src='/logo.PNG' width={400} height={200} alt='logo' />
		</Link>
	);
};

export default Logo;
