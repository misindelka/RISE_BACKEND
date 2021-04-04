import express from 'express';
import User from '../models/user.js';
const router = express.Router();

router.post('/rise/users', (req, res) => {
	const myData = new User(req.body);
	myData.save((err, post) => {
		if (err) {
			console.log('unable to save to DB', myData);
		}

		res.status(201).json(post);
		console.log('saved', myData);
	});
});
export default router;
