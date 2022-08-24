const express = require('express');
const path    = require('path');
const app     = express();
const router  = express.Router();

router.get('/', (req, res) => {res.sendFile(path.join(__dirname+'/index.html'));});
app.use('/', router);

app.listen(8000, 'localhost', () => {console.log('running ...');});

