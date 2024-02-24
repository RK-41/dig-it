'use client';

import { motion } from 'framer-motion';
import { ThreeDCardSnippet } from './snippets/3d-card-snippet';
import { TabsSnippet } from './snippets/tabs-snippet';
import { DirectionAwareHoverSnippet } from './snippets/direction-aware-hover-snippet';

const GraphicDesign = () => {
	return (
		<div className='text-white text-lg'>
			<div className='mx-auto relative z-10 w-full py-10 md:py-20 px-2'>
				<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to bg-sky-200 bg-opacity-50'>
					Graphic Design
				</div>

				<p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
					We create stunning visuals for your brand. From logos to social media
					posts, we&apos;ve got you covered.
				</p>

				<div className='items-center lg:flex justify-center md:mx-4 md:space-x-10'>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						className='px-10 md:px-0'
					>
						<ThreeDCardSnippet />
					</motion.div>

					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						className='px-10 md:px-0'
					>
						<DirectionAwareHoverSnippet />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default GraphicDesign;
