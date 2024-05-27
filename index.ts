import express from 'express';

import { AdminRoute, VendorRoute } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

app.listen(8000, () => {
  console.clear();
  console.log('App listening on port 8000');
});
