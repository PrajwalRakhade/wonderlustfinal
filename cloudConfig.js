const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.dowgddmvy,
    api_key: 366397987948877,
    api_secret: process.env.AGtou3PpUH51xsyF4fsvRYGS52s,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowedFormats: ["png", "jpg", "svg", "jpeg", "ico"],
    },
});

module.exports = {
    cloudinary,
    storage,
};