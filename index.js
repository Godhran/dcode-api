const express = require('express');
const morgan = require("morgan");
const cors = require('cors')
const helmet = require('helmet')

const app = express();

const wordRoutes = require('./routes/word/word');

const PORT = 8080;
const HOST = "localhost";

app.use(cors())
app.use(express.json());
app.set('query parser', 'simple');

app.use(helmet())
app.use(morgan('dev'));

app.use('/word/', wordRoutes);
//
// app.use('/teams/', matchRoutes);

const port = process.env.PORT || 80;
app.listen( port, () => {
// app.listen(PORT, HOST, () => {
    console.log(`DCODE server started on port ${port}.`)
});
