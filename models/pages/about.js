import mongoose from 'mongoose';

const AboutSchema = mongoose.Schema({
	head: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},

	image: {
		type: String,
		required: true,
	},
});

export default mongoose.model('about', AboutSchema);
