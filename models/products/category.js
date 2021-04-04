import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
});

export default mongoose.model('category', CategorySchema);
