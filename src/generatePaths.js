const fs = require('fs');
const path = require('path');

// find all directories in the assets/images/cards/fronts directory
// and create a card object for each image

const directoryPath = path.join(__dirname, 'assets/images/cards/fronts');
const cards = [];

fs.readdirSync(directoryPath).forEach((directory) => {
  const directoryPath = path.join(
    __dirname,
    'assets/images/cards/fronts',
    directory
  );
  fs.readdirSync(directoryPath).forEach((file) => {
    if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      const imageFilePath = path.join(
        '/src/assets/images/cards/fronts',
        directory,
        file
      );
      cards.push({ theme: directory, image: imageFilePath });
    }
  });
});

// const directoryPath = path.join(
//   __dirname,
//   'assets/images/cards/fronts/pokemon'
// );
// const cards = [];

// fs.readdirSync(directoryPath).forEach((file) => {
//   if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
//     const imageFilePath = path.join(
//       '/src/assets/images/cards/fronts/pokemon',
//       file
//     );
//     // Create two identical cards for each image (for matching pairs)
//     cards.push({ id: cards.length + 1, image: imageFilePath });
//     cards.push({ id: cards.length + 1, image: imageFilePath });
//   }
// });

fs.writeFileSync('cardFrontImages.json', JSON.stringify(cards));
