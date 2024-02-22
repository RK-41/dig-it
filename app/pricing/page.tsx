'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PiCheckCircleFill } from 'react-icons/pi';
import Navbar from '@/components/navbar';

const plans = [
	{
		index: 0,
		name: 'Basic',
		price: 'INR 9999',
		features: [
			'Full responsiveness on all scrins',
			'Design + Development',
			'Private communication channel',
			'1-3 days turnaround time',
		],
		style:
			'rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
		description:
			'Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.',
		button: 'Buy Now',
	},
	{
		index: 1,
		name: 'Premium',
		price: 'US $1299',
		features: [
			'Fully responsive on all screens',
			'React / Next.js / Tailwind CSS code',
			'Design + Development',
			'24-hour support response time',
			'Private communication channel',
			'3-5 days turnaround time',
		],
		style:
			' rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
		description:
			'Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.',
		button: 'Buy Now',
	},
	{
		index: 2,
		name: 'Enterprise',
		feature: 'Contact Us',
		price: "Let's Talk!",
		features: [
			'Fully responsive on all screens',
			'React / Next.js / Tailwind CSS code',
			'Design + Development',
			'Unlimited Revisions',
			'24-hour support response time',
			'Private communication channel',
			'Priority Development Queue',
			'Dedicated Project Manager',
		],
		style:
			' h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ',
		description:
			'Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.',
		button: 'Contact Us',
	},
];

const Pricing = () => {
	return (
		<div className='w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
			<Navbar
				scrollToWebsiteDesign={() => {}}
				scrollToGraphicDesign={() => {}}
				scrollToShopifyStores={() => {}}
				scrollToServices={() => {}}
			/>
			<div className='flex flex-col itemx-center justify-center'>
				<div className='text-4xl pb-10 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
					Choose the Plan <br /> that suits You best
				</div>

				<div className='mx-auto grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start'>
					{plans.map((plan, index) => (
						<div
							key={plan.name}
							className='h-full flex flex-col justify-between border rounded-xl px-6'
						>
							<div className={plan.style}>
								<div className='text-3xl flex items-center font-medium'>
									{plan.name}
								</div>
								<div className='text-2xl pt-4'>{plan.price}</div>
								<div className='py-4'>{plan.description}</div>

								<ul>
									{plan.features.map((feature) => (
										<li
											key={feature}
											className='text-lg py-2 felx space-x-2 items-center'
										>
											{plan.feature === 'Contact Us' ? (
												<PiCheckCircleFill className='text-blue-400 mr-2 text-xl' />
											) : (
												<PiCheckCircleFill className='text-green-600 mr-2 text-xl' />
											)}
											{/* <p>{feature}</p> */}
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className={plan.button}>
								{index === 0 && (
									<Link
										href='https://buy.stripe.com/'
										className='rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300'
									>
										Buy Now
									</Link>
								)}
								{index === 1 && (
									<Link
										href='https://buy.stripe.com/'
										className='rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300'
									>
										Buy Now
									</Link>
								)}
								{index === 2 && (
									<Link
										href='/contact'
										className='rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-blue-500 to-blue-300'
									>
										Contact Us
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
