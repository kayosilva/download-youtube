const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');


const app = express();


app.use(cors());

app.listen(4000, () => {
    console.log('Server Works!!! At port 4000');
});


app.get('/download', (req, res) => {
    var url = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(url, {
        format: 'mp4'
    }).pipe(res);
});