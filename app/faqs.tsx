import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = () => {
	return (
		<div className='mt-0 md:py-10 bg-[#f6f5f4] w-full rounded-2xl'>
			<div className='p-10 md:p-4 md:px-20'>
				<div className='text-3xl md:text-5xl font-bold text-black'>
					Have Questions!
				</div>

				<div className='font-semibold text-2xl md:text-4xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent'>
					Get Answers...
				</div>

				<Accordion type='single' collapsible>
					<AccordionItem value='item1'>
						<AccordionTrigger>What is Dig-It?</AccordionTrigger>
						<AccordionContent>
							Dig-It is full fledged digital marketing agency that specializes
							in branding, web design, and digital merketing.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='item2'>
						<AccordionTrigger>How to start?</AccordionTrigger>
						<AccordionContent>
							You can start by contacting us. We will get back to you within 12
							hours.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='item3'>
						<AccordionTrigger>What&apos;s the pricing?</AccordionTrigger>
						<AccordionContent>
							We offer custom tailored solutions for your business. You can
							contact us to get a quote.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='item4'>
						<AccordionTrigger>What about customer support?</AccordionTrigger>
						<AccordionContent>
							We provide customer support from 9am to 9pm any day of the week.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQS;
