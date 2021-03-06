import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { config } from 'dotenv';

config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

import routes from './routes';

const port = 3333;

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errors());

app.listen(port, () => { console.log(`Server running on port: ${port}`) });
