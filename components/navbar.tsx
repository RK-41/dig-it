'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import DropDownMenu from './drop-down-menu';
import Image from 'next/image';

interface NavbarProps {
	scrollToWebsiteDesign: () => void;
	scrollToGraphicDesign: () => void;
	scrollToShopifyStores: () => void;
	scrollToServices: () => void;
}

const Navbar = ({
	scrollToWebsiteDesign,
	scrollToGraphicDesign,
	scrollToShopifyStores,
	scrollToServices,
}: NavbarProps) => {
	const [isDropDownVisibile, setIsDropDownVisible] = useState(false);

	const toggleDropDown = () => {
		setIsDropDownVisible(!isDropDownVisibile);
	};

	const closeDropDown = () => {
		setIsDropDownVisible(false);
	};

	return (
		<div>
			<div className='p-6 md:p-10 flex items-center justify-between z-50'>
				<div>
					{/* <Link className='cursor-pointer w-40' href='/'>
						<Image
							priority
							src='/logo/logo2.png'
							alt='Logo'
							width={100}
							height={100}
							className='w-12 h-max md:w-20 md:h-max rounded-sm bg-white'
						/>
					</Link> */}

					<Link
						href='/'
						className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mr-3 min-w-28 w-28'
					>
						<Image
							priority
							src='/logo/logo3.png'
							alt='Logo'
							width={100}
							height={100}
							className='w-20 h-12 md:w-28 md:h-14 rounded-sm'
						/>
					</Link>
				</div>

				<div className='cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
					{/* <Link
						href='/'
						onClick={scrollToWebsiteDesign}
						className='hover:text-gray-50'
                  >
						Website Design
					</Link> */}
					<div onClick={scrollToWebsiteDesign} className='hover:text-gray-50'>
						Website Design
					</div>
					<div onClick={scrollToGraphicDesign} className='hover:text-gray-50'>
						Graphic Design
					</div>
					<div onClick={scrollToShopifyStores} className='hover:text-gray-50'>
						Shopify Stores
					</div>
					<div onClick={scrollToServices} className='hover:text-gray-50'>
						Services
					</div>

					<Link href='/pricing' className='hover:text-gray-50'>
						Pricing
					</Link>
				</div>

				<div className='flex md:hidden'>
					{isDropDownVisibile ? (
						// Display an X icon when the dropdown is visibl  e
						<div
							onClick={toggleDropDown}
							className='w-8 h-8 text-slate-300 cursor-pointer'
						>
							<X />
							<DropDownMenu onClose={closeDropDown} />
						</div>
					) : (
						<AlignJustify
							onClick={toggleDropDown}
							className='w-8 h-8 text-slate-300 cursor-pointer'
						/>
					)}
				</div>

				<div className='hidden md:flex'>
					<Link
						href='/contact'
						className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-3'
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
