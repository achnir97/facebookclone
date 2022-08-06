const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS,POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Content-type", "Accept");
    next();
})

app.post("/upload", (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy

    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});