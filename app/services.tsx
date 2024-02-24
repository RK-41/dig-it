'use client';
import { CardHoverEffectSnippet } from './snippets/card-hover-effect-snippet';

const Services = () => {
	return (
		<div className='text-w-5xl py-10 md:py-20 md:text-7xl text-center '>
			<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to bg-neutral-50 bg-opacity-50'>
				Streamline Your Business with Our Services
			</div>

			<p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
				From website design to social media management, you get wide range of
				services to help you grow your business.
			</p>

			<CardHoverEffectSnippet />
		</div>
	);
};

export default Services;
