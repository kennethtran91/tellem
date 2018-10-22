const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello👌'
    })
})

app.post('/msg', (req, res) => {
    console.log(res.body)
})

app.listen(5000, () => {
    console.log('Listening on 5000');
})