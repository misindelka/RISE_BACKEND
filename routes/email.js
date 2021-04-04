import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();
import { USER, PASSWORD } from '../config/nodemailer/email.js';

const transport = {
	service: 'gmail',
	auth: {
		user: USER,
		pass: PASSWORD,
	},
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('server is ready for message');
	}
});

router.post('/send', (req, res, next) => {
	const name = req.body.name;
	const query = req.body.query;
	const email = req.body.email;
	const category = req.body.category;
	const content = `jméno:  ${name} \n email:  ${email}  \n kategoria:  ${category} \n obsah:  ${query} `;
	console.log(content);

	const mail = {
		from: email,
		to: 'misndelka.dev.tests@gmail.com',
		subject: 'rise',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({ status: 'success' });
		}
	});
});

export default router;
