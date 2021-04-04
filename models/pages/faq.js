import mongoose from 'mongoose';

const FaqSchema = mongoose.Schema({
	
	question: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},

});

export default mongoose.model('faq', FaqSchema);
