import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	street: { type: String, required: true },
	stNumber: { type: String, required: true },
	city: { type: String, required: true },
	zipCode: { type: String, required: true },
	email: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	message: { type: String, required: true },
});

export default mongoose.model('User', userSchema);
