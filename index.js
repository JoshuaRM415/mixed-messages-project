const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const errorHandler = require('errorhandler')


app.use(express.static('/public'))
app.use(morgan('short'));
app.use(bodyParser.json());


//code to define port number. Im not so sure about how this works.
const PORT = process.env.PORT || 80;

app.use(errorHandler());

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
});

