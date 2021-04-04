import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	streetName: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	
    email: {
		type: String,
		required: true,
	},
});

export default mongoose.model('contact', ContactSchema);


