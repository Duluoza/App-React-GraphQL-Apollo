const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors =  require('cors');

const app = express();
const PORT = 3005;

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const dbRoute = "mongodb://localhost:27017/GraphQl";
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});