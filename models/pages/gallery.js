import mongoose from 'mongoose';

const GallerySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
});

export default mongoose.model('carousel', GallerySchema);
