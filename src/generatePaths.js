const fs = require('fs');
const path = require('path');

// Define paths to various image directories.
const cardFrontImgDirectoryPath = path.join(
  __dirname,
  'assets/images/cards/front'
);
const cardBackImgDirectoryPath = path.join(
  __dirname,
  'assets/images/cards/back'
);
const avatarImgDirectoryPath = path.join(__dirname, 'assets/images/avatars/');

// Define the base path for the project directory.
const basePath = path.join(__dirname, '');

const getImgArray = (pathToFolder) => {
  const images = {};

  // Helper function to process a file:
  const processFile = (file, directory) => {
    if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      let imageFilePath = path.join(directory, file);
      imageFilePath = imageFilePath.replace(basePath, '/src');
      const variant = path.basename(directory);
      if (!images[variant]) {
        images[variant] = [];
      }
      images[variant].push(imageFilePath);
    }
  };

  // Iterate over each item (file or directory) in the given path.
  fs.readdirSync(pathToFolder).forEach((item) => {
    if (item === '.DS_Store') return;

    const itemPath = path.join(pathToFolder, item);

    // Check if the item is a directory or a file.
    if (fs.statSync(itemPath).isDirectory()) {
      fs.readdirSync(itemPath).forEach((file) => {
        processFile(file, itemPath);
      });
    } else {
      processFile(item, pathToFolder);
    }
  });

  return images;
};

const cardFronts = getImgArray(cardFrontImgDirectoryPath);
const cardBacks = getImgArray(cardBackImgDirectoryPath);
const avatars = getImgArray(avatarImgDirectoryPath);

fs.writeFileSync('cardFrontImages.json', JSON.stringify(cardFronts));
fs.writeFileSync('cardBackImages.json', JSON.stringify(cardBacks));
fs.writeFileSync('avatarImages.json', JSON.stringify(avatars));
