import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	if (req.method === 'POST') {
		try {
			const {
				first_name,
				last_name,
				email,
				company_name,
				company_size,
				help,
				info,
				terms,
			} = await req.json();

			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: 'goforsomethingnew@gmail.com',
					pass: 'djdx ojtl vume fnzh',
				},
			});

			const mailOptions = {
				from: email,
				to: 'goforsomethingnew@gmail.com',
				subject: 'Contact Form Submission for Dig-IT',
				html: `
               <h1>Contact Form</h1>
               <p>First Name: ${first_name}</p>
               <p>Last Name: ${last_name}</p>
               <p>Work Email: ${email}</p>

               <p>Company Name: ${company_name}</p>
               <p>Company Size: ${company_size}</p>
               <p>Help: ${help}</p>

               <p>Info: ${info}</p>
            `,
			};

			await transporter.sendMail(mailOptions);

			return NextResponse.json('Email has been sent successfully');
		} catch {
			return NextResponse.json('Failed to send emial');
		}
	} else {
		return NextResponse.json('Method not allowed');
	}
}
