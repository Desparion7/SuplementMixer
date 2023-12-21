import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { motion } from 'framer-motion';

type InputType = {
	type: string;
	name: string;
	errorMessage?: string;
	register: UseFormRegisterReturn;
	label: string;
};

const Input = ({ type, name, register, errorMessage, label }: InputType) => {
	const borderColor = !errorMessage ? 'border-gray-300' : 'border-red-400';
	const spanBorderColor = !errorMessage
		? 'border-gray-600'
		: 'peer-[&:not(:placeholder-shown)]:border-red-400';
	const spanColor = errorMessage && 'text-red-400';

	return (
		<div className='mb-7 w-full lg:mb-5 '>
			<label
				htmlFor={name}
				className='relative w-full text-sm lg:text-sm'
			>
				<input
					{...register}
					type={type}
					name={name}
					id={name}
					className={`peer mb-3 w-[90%] rounded-sm p-[0.75rem] text-black shadow-lg outline-none placeholder:text-transparent lg:w-full  ${borderColor} border-2 transition-all duration-300 focus-within:border-[var(--mainColorOpacity60)] `}
					placeholder={`${errorMessage ? { errorMessage } : ''}`}
				/>
				<span
					className={`absolute -top-[0.20rem] left-[1.25rem] cursor-text rounded-sm text-black transition-all duration-300 ${spanColor}
                    peer-focus-within:-top-[2.4rem]
                    peer-focus-within:left-[1.2rem]
                    peer-focus-within:text-sm
                    peer-focus-within:bg-white
                    peer-focus-within:px-5
                    peer-focus-within:py-[0.1rem]
                    peer-[&:not(:placeholder-shown)]:-top-[2.4rem]
                    peer-[&:not(:placeholder-shown)]:left-[1.2rem] 
                    peer-[&:not(:placeholder-shown)]:bg-white
                    peer-[&:not(:placeholder-shown)]:px-5
                    peer-[&:not(:placeholder-shown)]:py-[0.1rem]
                    peer-[&:not(:placeholder-shown)]:text-sm
                    peer-focus-within:[&:not(:placeholder-shown)]:border-[var(--mainColorOpacity60)]
                    ${spanBorderColor}
                    peer-[&:not(:placeholder-shown)]:border-2`}
				>
					{label}
				</span>
			</label>
			{errorMessage && (
				<motion.p
					className='my-3 font-semibold text-red-600'
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
				>
					{errorMessage}
				</motion.p>
			)}
		</div>
	);
};

export default Input;
