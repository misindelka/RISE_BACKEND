import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	price: {
		price: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		more: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
		new: {
			type: Boolean,
			require: true,
		},
	},
});

export default mongoose.model('product', ProductSchema);
