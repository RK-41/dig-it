import Image from 'next/image';
import React from 'react';

import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Lora({
	subsets: ['latin'],
	weight: ['400'],
});

const brandLogos = [
	{
		image: '/brands/brand1.svg',
	},
	{
		image: '/brands/brand2.svg',
	},
	{
		image: '/brands/brand3.svg',
	},
	{
		image: '/brands/brand4.svg',
	},
	{
		image: '/brands/brand5.svg',
	},
	{
		image: '/brands/brand6.svg',
	},
];

function Brands() {
	return (
		<div className='mx-auto relative z-10 w-full py-10 md:py-20'>
			<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to bg-sky-200 bg-opacity-50'>
				Brands that chose Us
			</div>

			<p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
				From small business to large corporations, we have helped many brands to
				elevate their business.
			</p>

			<div className='grid grid-cols-3 items-center justify-center mx-auto md:w-4/5 sm:w-1/2 w-60 max-w-xl cursor-pointer'>
				{brandLogos.map((logo, index) => (
					<div key={index} className='p-4 md:p-12 sm:p-6'>
						<Image
							priority
							src={logo.image}
							alt='brand-logo'
							width={300}
							height={300}
							className='w-full h-auto max-w-full rounded-lg'
						/>
					</div>
				))}
			</div>

			<div
				className={cn(
					'flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white',
					font.className
				)}
			>
				&quot;We got rid of nearly a dozen different tools because of what
				Dig-IT did for us.&quot;
			</div>

			<div className='items-center flex justify-center flex-col text-white'>
				<Image
					src='/brands/brand7.svg'
					alt='brand-logo'
					width={1000}
					height={1000}
					className='pt-2 xl:pt-0 w-10 xl:w-14'
				/>
			</div>

			<div className='text-center text-white'>
				<div className='text-sm font-medium pt-4'>Baburao Ganpatrao Apte</div>
				<div className='text-sm'>Owner, Star Garage</div>
			</div>
		</div>
	);
}

export default Brands;
