const express = require('express');
const app = express();

app.get('/:name', (req, res) => {
    res.send('hello ' + req.params.name + ' So nice to see you!');
});   
    const port = process.env.PORT || 3000;
    
    app.listen(port, () => console.log('Listening to port 3000'));
