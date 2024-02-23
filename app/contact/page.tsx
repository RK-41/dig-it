'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { PiCheckLight, PiSmiley } from 'react-icons/pi';
import Navbar from '@/components/navbar';

const FormSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email(),
	company_name: z.string(),
	help: z.enum([
		'Evaluate Dig-It for my company',
		'Learn More',
		'Get a Quote',
		'Other',
	]),
	company_size: z.enum([
		'1-10',
		'11-50',
		'51-100',
		'101-200',
		'201-500',
		'501-1000',
		'1000+',
	]),
	info: z.string(),
	// terms: z.boolean(),
});

type FormValues = {
	first_name: string;
	last_name: string;
	email: string;
	company_name: string;
	company_size:
		| '1-10'
		| '11-50'
		| '51-100'
		| '101-200'
		| '201-500'
		| '501-1000'
		| '1000+';
	help:
		| 'Evaluate Dig-It for my company'
		| 'Learn More'
		| 'Get a Quote'
		| 'Other';
	info: string;
	// terms: boolean;
};

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	// const [acceptTerms, setAcceptTerms] = useState(false);
	const { toast } = useToast();

	const form = useForm<FormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			company_name: '',
			company_size: '1-10',
			help: 'Learn More',
			info: 'Expecting response as soon as possible.',
			// terms: true,
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// FormSchema.transform(({ terms, ...rest }) => ({
		// 	...rest,
		// 	terms: acceptTerms,
		// }));

		// console.log('Terms: ', acceptTerms);

		try {
			setLoading(true);
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				// body: JSON.stringify(data),
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error('Something went wrong');
			}

			setSubmitted(true);
		} catch (error) {
			toast({
				title: 'Error',
				description: 'Something went wrong',
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
			<Navbar
				scrollToWebsiteDesign={() => {}}
				scrollToGraphicDesign={() => {}}
				scrollToShopifyStores={() => {}}
				scrollToServices={() => {}}
			/>

			<div className='lg:flex items-start justify-center md:py-20 px-6'>
				<div className='text-center'>
					<div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
						Contact Us
					</div>

					<div className='py-4 text-gray-300'>
						Let&apos;s talk about how we can help your team work better.
					</div>

					<div className='bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 md:flex md:flex-col mx-auto'>
						<div className='flex gap-4 border-b'>
							<div className='flex gap-4 border-b'>
								One flexible agency for your entire company to share knowledge,
								ship projects, and collaborate.
							</div>
						</div>

						<div className='flex gap-4 border-b'>
							<div className='flex gap-4 border-b'>
								Enterprise features to securely manage user access and security.
							</div>
						</div>

						<div className='flex gap-4 border-b'>
							<div className='font-normal pb-4'>
								Dedicated support to work with you on your setup and help you
								build the best plan for your company.
							</div>
						</div>
					</div>
				</div>

				<Form {...form}>
					{!submitted ? (
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-4 h-full border rounded-2xl p-10 md:w-4/5 mx-auto'
						>
							<FormField
								control={form.control}
								name='first_name'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											First Name *
										</FormLabel>

										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='last_name'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											Last Name *
										</FormLabel>

										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											Email *
										</FormLabel>

										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='company_name'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											Company Name
										</FormLabel>

										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='company_size'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											Company Size
										</FormLabel>

										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select an option' />
												</SelectTrigger>
											</FormControl>

											<SelectContent>
												<div className='flex gap-4'>
													<SelectItem value='1-10'>1-10</SelectItem>
													<SelectItem value='11-50'>11-50</SelectItem>
													<SelectItem value='51-100'>51-100</SelectItem>
													<SelectItem value='101-200'>101-200</SelectItem>
													<SelectItem value='201-500'>201-500</SelectItem>
													<SelectItem value='501-1000'>501-1000</SelectItem>
													<SelectItem value='1000+'>1000+</SelectItem>
												</div>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='help'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											How can we help?
										</FormLabel>

										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select an option' />
												</SelectTrigger>
											</FormControl>

											<SelectContent>
												<div className='flex gap-4'>
													<SelectItem value='Evaluate Dig-It for my company'>
														Evaluate Dig-It for my company
													</SelectItem>
													<SelectItem value='Get a Quote'>
														Get a Quote
													</SelectItem>
													<SelectItem value='Learn More'>Learn More</SelectItem>
													<SelectItem value='Other'>Other</SelectItem>
												</div>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='info'
								render={({ field }) => (
									<FormItem className='items-center justify-center w-full'>
										<FormLabel className='text-sm bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
											Anything Else?
										</FormLabel>

										<FormControl>
											<Textarea style={{ height: '100px' }} {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<div className='flex gap-4 items-center pt-[10px]'>
								<div>
									<Checkbox
										className='
                           outline
                           border-2
                           text-sm
                           font-light
                           bg-clip-text
                           text-neutral-200
                           bg-gradient-to-b
                           from-neutral-200 to-neutral-400'
										checked
									/>
								</div>

								{/* <FormField
									control={form.control}
									name='terms'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Checkbox
													className='
                           outline
                           border-2
                           text-sm
                           font-light
                           bg-clip-text
                           text-neutral-200
                           bg-gradient-to-b
                           from-neutral-200 to-neutral-400'
													// onCheckedChange={() => setAcceptTerms(!acceptTerms)}
												/>
											</FormControl>
										</FormItem>
									)}
								/> */}

								<div className='text-xs font-light md:w-3/4 mb-1 bg-clip-text text-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-400'>
									I agree to &quot;Dig-It&quot; sending marketing
									communications.
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<Button
									type='submit'
									className='text-sm font-light'
									disabled={loading}
									onClick={() => form.handleSubmit(onSubmit)}
								>
									Submit
								</Button>
							</div>
						</form>
					) : (
						<>
							<div className='text-xl md:text-2xl flex items-center justify-center flex-col px-8'>
								<div className='w-120 py-20'>
									<PiSmiley className='text-6xl text-[#6c6684] mx-auto' />

									<div className='text-gray-500 font-light text-center justify-center mx-auto py-10'>
										We&apos;ve received your inquiry.
										<br />
										We will contact you shortly.
									</div>
								</div>
							</div>
						</>
					)}
				</Form>
			</div>
		</div>
	);
}
