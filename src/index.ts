import * as dotenv from 'dotenv';
import app from './server';

dotenv.config();

app.listen(3002, () => {
    console.log('Server Listening on PORT : 3002')
})