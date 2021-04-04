import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import products from './routes/products.js';
import pages from './routes/pages.js';
import email from './routes/email.js';
import { mongoURI as db } from './config/keys.js';
import user from './routes/user.js';
import users from './routes/users.js';

const app = express();

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

app.use(pages, email, products, users);
app.use('/user', user);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
