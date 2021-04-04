import express from 'express';
import Faq from '../models/pages/faq.js';
import Home from '../models/pages/home.js';
import FaqForm from '../models/pages/faqfrom.js';
import Contact from '../models/pages/contact.js';
import Gallery from '../models/pages/gallery.js';
import About from '../models/pages/about.js';

const router = express.Router();

router.get('/home', (req, res) => {
	Home.find()
		.sort({ date: -1 })
		.then((home) => res.json(home));
});

router.get('/faq', (req, res) => {
	Faq.find().then((faq) => res.json(faq));
});

router.get('/faqForm', (req, res) => {
	FaqForm.find().then((faqform) => res.json(faqform));
});

router.get('/contact', (req, res) => {
	Contact.find()
	.then((contact) => res.json(contact));
});

router.get('/gallery', (req, res) => {
	Gallery.find().then((carousel) => res.json(gallery));
});

router.get('/about', (req, res) => {
	About.find().then((about) => res.json(about));
});

export default router;
