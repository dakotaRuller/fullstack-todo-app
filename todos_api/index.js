let express = require('express');
let PORT = process.env.PORT || 3008;
let app = express();
let bodyParser = require('body-parser');
let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/views`));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`);
});