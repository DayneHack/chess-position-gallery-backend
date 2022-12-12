import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js'
import { config } from 'dotenv';
config();

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use(cors())

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.test.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
    
//mongoose.set('useFindAndModify', false);