'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Link {
	link: string;
	label: string;
}

type NavLinksGroupProps = {
	label: string;
	links: Link[];
};

const NavLinksGroup = ({ label, links }: NavLinksGroupProps) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className='relative' onMouseLeave={() => setVisible(false)}>
			<p
				onMouseEnter={() => setVisible(true)}
				onClick={() => {
					setVisible(true);
				}}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						setVisible(true);
					}
				}}
				tabIndex={0}
				className='p-3 text-center'
			>
				{label}
			</p>
			{visible ? (
				<motion.div
					initial={{ opacity: 0, translateY: '-30px' }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 0.5 }}
					className='flex flex-col absolute min-w-[180px] justify-center bg-white p-5 whitespace-nowrap gap-2'
				>
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.link}
							className='hover:text-[var(--mainColor)] transition-all'
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									setVisible(false);
								}
							}}
							onClick={() => {
								setVisible(false);
							}}
						>
							{link.label}
						</Link>
					))}
				</motion.div>
			) : null}
		</div>
	);
};

export default NavLinksGroup;
