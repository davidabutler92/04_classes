const express = require('express');
const app = express();

app.use(express.json());

app.post('/lint', (req, res) => {
    res.send('Lint');
})


app.listen(7890, () => {
    console.log('started on 7890');
})