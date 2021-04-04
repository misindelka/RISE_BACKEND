import mongoose from 'mongoose';

const HomeSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

export default mongoose.model('home', HomeSchema);
