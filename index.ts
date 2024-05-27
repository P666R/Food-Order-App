import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

import { AdminRoute, VendorRoute } from './routes';
import { MONGO_URI } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('MongoDB connected');
    app.listen(8000, () => {
      // console.clear();
      console.log('App listening on port 8000');
    });
  } catch (err) {
    console.log('mongo error: ', err);
  }
};

startServer();
