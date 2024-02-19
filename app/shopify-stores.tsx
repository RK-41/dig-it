'use client';

import Image from 'next/image';

const stores = [
	{
		image: '/images/shop-1.png',
		quote:
			'Dig-It gave us an extra push we needed, and it has be an amazing ride so far.',
		name: 'Jack Reacher',
	},
	{
		image: '/images/shop-2.jpeg',
		quote:
			'The team at Dig-It is amazing. They helped us create a stunning store that we are proud of.',
		name: 'Saul Goodman',
	},
	{
		image: '/images/shop-3.jpg',
		quote:
			'We had no idea how to get started, and Dig-It helped us to create something amazing.',
		name: 'Johnny Blaze',
	},
];
const ShopifyStores = () => {
	return (
		<section className='py-10 md:py-20 w-full bg-slate-900'>
			<div className='p-4 mx-auto relative z-10 w-full'>
				<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to bg-sky-200 bg-opacity-50'>
					Shopify Stores
				</div>

				<p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
					We create studding Shopify stores that are designed to convert.
				</p>

				<div className='md:flex items-center justify-center px-10'>
					{stores.map((store, index) => (
						<div
							key={index}
							className='flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto'
						>
							<div className='flex flex-col items-center justify-center bg-white rounded-xl mx-2 p-2'>
								<Image
									src={store.image}
									alt='shopify store'
									width={400}
									height={400}
									className='rounded-lg mx-auto'
								/>

								<p className='text-neutral-800 font-bold text-lg mt-4 text-center'>
									&quot;{store.quote}&quot;
								</p>

								<p className='text-neutral-800 font-bold text-lg mt-4'>
									{' '}
									- {store.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ShopifyStores;
