const sharp = require('sharp');
const path = require('path');

const uploadDirectory = path.join(__dirname, 'uploads');

sharp(`${uploadDirectory}/image.jpg`)
  .resize(50, 50)
  .rotate(180)
  .toFile(`${uploadDirectory}/image_50_50.jpg`, (error, info) => {
    if (error) throw error;

    console.log(info);
  });
