import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { cartRoute } from './routes/cart.js';
import { userRoute } from './routes/user';
import { productRoute } from './routes/product';
import { orderRoute } from './routes/order';

export const createServer = () => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(
      urlencoded({
        extended: true,
      })
    )
    .use(json())

    .use(cors())
    .use(cartRoute)
    .use(productRoute)
    .use(userRoute)
    .use(orderRoute)
    .get('/check', (req, res) => {
      return res.json({
        ok: true,
      });
    })
    .get('/digital-check', (req, res) => {
      return res.json({
        ok: true,
      });
    });
  return app;
};
