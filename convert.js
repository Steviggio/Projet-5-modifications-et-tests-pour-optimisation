var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('./assets/images/gallery/entreprise/ali-morshedlou-resized-compressed.jpg')
.resize(240, 240)
.noProfile()
.write('./assets/images/gallery/entreprise/ali-morshedlou-Magick.jpg', function (err) {
  if (!err) console.log('done');
});