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
  const imgArray = [];

  // Helper function to process a file:
  // Checks if the file is an image and then adds its path to the imgArray.
  const processFile = (file, directory) => {
    if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      let imageFilePath = path.join(directory, file);
      // Replace absolute path with relative path starting from the project directory.
      imageFilePath = imageFilePath.replace(basePath, '/src');
      // Extract just the parent folder name for the 'variant'.
      const variant = path.basename(directory);
      imgArray.push({ variant: variant, image: imageFilePath });
    }
  };

  // Iterate over each item (file or directory) in the given path.
  fs.readdirSync(pathToFolder).forEach((item) => {
    // Ignore any .DS_Store files.
    if (item === '.DS_Store') return;

    const itemPath = path.join(pathToFolder, item);

    // Check if the item is a directory or a file.
    if (fs.statSync(itemPath).isDirectory()) {
      // If it's a directory, iterate over its files and process them.
      fs.readdirSync(itemPath).forEach((file) => {
        processFile(file, itemPath);
      });
    } else {
      // If it's a file, directly process it.
      processFile(item, pathToFolder);
    }
  });

  // Return the populated imgArray.
  return imgArray;
};

// Fetch image arrays for each directory.
const cardFronts = getImgArray(cardFrontImgDirectoryPath);
const cardBacks = getImgArray(cardBackImgDirectoryPath);
const avatars = getImgArray(avatarImgDirectoryPath);

// Write image arrays to their respective JSON files.
fs.writeFileSync('cardFrontImages.json', JSON.stringify(cardFronts));
fs.writeFileSync('cardBackImages.json', JSON.stringify(cardBacks));
fs.writeFileSync('avatarImages.json', JSON.stringify(avatars));
