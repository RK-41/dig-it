'use client';

import Navbar from '@/components/navbar';
import SliderOne from '@/components/ui/slider';
import { Spotlight } from '@/components/ui/spotlight';
import Link from 'next/link';
import WebsiteDesign from './website-design';
import GraphicDesign from './graphic-design';
import ShopifyStores from './shopify-stores';
import Brands from './brands';
import Services from './services';
import FAQS from './faqs';
import { useRef } from 'react';
import { Button } from '@/components/ui/moving-border';

export default function Home() {
	const websiteDesignRef = useRef<HTMLDivElement>(null);
	const graphicDesignRef = useRef<HTMLDivElement>(null);
	const shopifyStoresRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLDivElement>(null);

	const scrollToWebsiteDesign = () => {
		websiteDesignRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToGraphicDesign = () => {
		graphicDesignRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToShopifyStores = () => {
		shopifyStoresRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToServices = () => {
		servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
			<Navbar
				scrollToWebsiteDesign={scrollToWebsiteDesign}
				scrollToGraphicDesign={scrollToGraphicDesign}
				scrollToShopifyStores={scrollToShopifyStores}
				scrollToServices={scrollToServices}
			/>

			<Spotlight
				className='hidden md:flex md:-left-60 md:-top-80'
				fill='white'
			/>

			<div className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2'>
				<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
					Create, Grow and Conquer
				</div>

				<p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
					Custom tailored solutions for your business.
				</p>

				<Link href={'/book'} className='flex justify-center my-6'>
					<Button className='text-lg bg-black '>Book a Meeting</Button>
				</Link>

				<div className='w-full pt-20'>
					<SliderOne />
				</div>
			</div>

			<div ref={websiteDesignRef}>
				<WebsiteDesign />
			</div>
			<div ref={graphicDesignRef}>
				<GraphicDesign />
			</div>
			<div ref={shopifyStoresRef}>
				<ShopifyStores />
			</div>
			<div ref={servicesRef}>
				<Services />
			</div>

			<Brands />
			<FAQS />
		</div>
	);
}
