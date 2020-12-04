const express = require('express');
const app = express();
const { linter } = require('./linter');

app.use(express.json());

app.post('/lint', (req, res) => {
    const results = linter(req.body.code);
    res.send(results);
})

app.listen(7890, () => {
    console.log('started on 7890');
})

