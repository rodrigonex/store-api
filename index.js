import express from 'express';
import cors from 'cors';
import winston from 'winston';
import clientRouter from './routes/client.routes.js'
import productRouter from './routes/client.routes.js'
import saleRouter from './routes/client.routes.js'
import supplierRouter from './routes/client.routes.js'

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`
});
global.logger = winston.createLogger({
  level: "sally",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "store-api.log"})
  ],
  format: combine(
    label({label: "store-api"}),
    timestamp(),
    myFormat
  )
})

const app = express();
app.use(express.json());
app.use(cors())

app.use("/client", clientRouter);
app.use("/product", productRouter);
app.use("/supplier", saleRouter);
app.use("/sale", supplierRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({error: err.message})
})

app.listen('3000', () => {
  console.log("Api started!")
})