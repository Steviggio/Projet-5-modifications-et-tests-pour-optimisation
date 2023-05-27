const sharp = require("sharp");

sharp("aaron-paul-wnX-fXzB6Cw-unsplash.jpg")
  .resize(380, 380)
  .toFile("image-resized")