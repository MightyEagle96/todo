const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/todoRoute');

const app = express();
dotenv.config({ path: './config.env' });

const port = process.env.PORT;

const database = process.env.DATABASE;
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use('/todos', router);
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database is connected'))
  .catch(() =>
    console.log('database is not connected, network failure detected')
  );

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
