import mongoose from 'mongoose';

const FaqformSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	}
	
});

export default mongoose.model('faqform', FaqformSchema);
