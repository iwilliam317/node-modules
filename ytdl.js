const ytdl = require('ytdl-core');

const fs = require('fs');

const path = require('path');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream(path.join(__dirname, 'videos', 'video.flv')));

  