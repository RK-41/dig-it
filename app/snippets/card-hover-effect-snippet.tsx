import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import {
	PiMonitor,
	PiStorefront,
	PiLock,
	PiMegaphone,
	PiAppStoreLogo,
	PiHeadsetFill,
} from 'react-icons/pi';

export function CardHoverEffectSnippet() {
	return (
		<div className='max-w-5xl mx-auto px-8'>
			<CardHoverEffect items={projects} />
		</div>
	);
}

export const projects = [
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiMonitor className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'Website Design',
		description:
			'We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.',
	},
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiStorefront className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'E-commerce Store',
		description:
			'From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.',
	},
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiLock className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'Authentication',
		description:
			'Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.',
	},
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiMegaphone className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'Social Media',
		description:
			'We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.',
	},
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiAppStoreLogo className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'App Development',
		description:
			'We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.',
	},
	{
		icon: (
			<div className='bg-blue-100 p-4 rounded-full'>
				<PiHeadsetFill className='w-8 h-8 text-blue-600' />
			</div>
		),
		title: 'Support',
		description:
			'We offer support for all our clients. We are here to help you with any issues or questions you may have.',
	},
];

// export const projects = [
// 	{
// 		title: 'Stripe',
// 		description:
// 			'A technology company that builds economic infrastructure for the internet.',
// 		link: 'https://stripe.com',
// 	},
// 	{
// 		title: 'Netflix',
// 		description:
// 			'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
// 		link: 'https://netflix.com',
// 	},
// 	{
// 		title: 'Google',
// 		description:
// 			'A multinational technology company that specializes in Internet-related services and products.',
// 		link: 'https://google.com',
// 	},
// 	{
// 		title: 'Meta',
// 		description:
// 			"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
// 		link: 'https://meta.com',
// 	},
// 	{
// 		title: 'Amazon',
// 		description:
// 			'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
// 		link: 'https://amazon.com',
// 	},
// 	{
// 		title: 'Microsoft',
// 		description:
// 			'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
// 		link: 'https://microsoft.com',
// 	},
// ];
