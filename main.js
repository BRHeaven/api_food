import express from 'express';
import rootRouter from './src/Routers/root.router.js';
import { middlewareError } from './src/common/helper/error.helper.js';
const port = 3333;
const app = express();
app.use(express.json());
app.use(rootRouter);
app.use(middlewareError);
app.listen(port,() => {`Server running port ${port}`});