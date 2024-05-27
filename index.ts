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

mongoose
  .connect(MONGO_URI as string)
  .then(() => {
    console.log('connected to mongo');
  })
  .catch((err) => console.log('mongo error: ', err));

app.listen(8000, () => {
  console.clear();
  console.log('App listening on port 8000');
});
