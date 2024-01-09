'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/button';
import Input from '@/components/input';
import { signin } from './_utils/singin';
import { loginSchema, TLoginSchema } from '@/utils/zodTypes';
import { useSession } from 'next-auth/react';

const Logowanie = () => {
	const router = useRouter();
	const { data: session } = useSession();

	useEffect(() => {
		if (session) router.push('/');
	}, [session, router]);
	
	const submitHandler = async (data: TLoginSchema) => {
		try {
			const response = await signin(data.email, data.password);
			if (response?.ok) {
				router.push('/');
			}
			if (!response?.ok) {
				reset();
				toast.error('Email lub hasło nie są poprawne!');
			}
		} catch (error) {
			reset();
			console.log(error);
			toast.error('Coś poszło nie tak!');
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<TLoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<main className='flex flex-col items-center justify-center p-24 gap-3'>
			<form
				onSubmit={handleSubmit(submitHandler)}
				className='flex flex-col text-center'
			>
				<motion.div
					initial={{ opacity: 0, y: -200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'linear',
					}}
				>
					<h1 className='text-4xl mb-10 uppercase font-semibold'>
						Logowanie
					</h1>
					<Input
						label={'Email'}
						type={'email'}
						name={'email'}
						register={register('email')}
						errorMessage={errors.email?.message}
					/>
					<Input
						label={'Hasło'}
						type={'password'}
						name={'password'}
						register={register('password')}
						errorMessage={errors.password?.message}
					/>
				</motion.div>
				<motion.div
					className='w-[100%]'
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'linear',
					}}
				>
					<Button
						text={'Zaloguj się'}
						penddingText={'Logowanie...'}
						loading={isSubmitting}
					/>
					<p className='mt-3 text-lg text-black'>
						Nie masz konta?{' '}
						<Link
							href='/rejestracja'
							className='text-green-800 font-semibold hover:text-green-600 transition-all'
						>
							Utwórz konto.
						</Link>{' '}
					</p>
				</motion.div>
			</form>
		</main>
	);
};

export default Logowanie;
