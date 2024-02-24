'use client';

import { InlineWidget } from 'react-calendly';
import Navbar from '@/components/navbar';

export default function Book() {
	return (
		<>
			<div className='flex flex-col w-full h-screen bg-black/[0.96] bg-grid-white/[0.02]'>
				<Navbar
					scrollToWebsiteDesign={() => {}}
					scrollToGraphicDesign={() => {}}
					scrollToShopifyStores={() => {}}
					scrollToServices={() => {}}
				/>

				<div className='text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
					Book a Meeting
				</div>

				<InlineWidget url='https://calendly.com/goforsomethingnew/15min' />
			</div>
		</>
	);
}
