'use client';
import React from 'react';

type ButtonPropsType = {
	text: string;
	penddingText: string;
	loading: boolean;
};

const Button = ({ text, penddingText, loading }: ButtonPropsType) => {
	return (
		<button
			type='submit'
			className='w-[100%] p-3 bg-gradient-to-b text-white from-lime-500 to-green-700 rounded-lg hover:text-black transition font-semibold'
			disabled={loading}
		>
			{loading ? penddingText : text}
		</button>
	);
};

export default Button;
