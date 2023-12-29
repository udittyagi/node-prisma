import express from 'express';
import morgan from 'morgan';

import router from './router';
import { protect } from './modules/auth';
import { createUser, signIn } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: "hello" })
});

app.use('/api', protect, router);
app.post('/user', createUser);
app.post('/signin', signIn);

export default app;
