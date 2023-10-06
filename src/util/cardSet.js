const calcCardSet = (numSets, numPerSet = 2, images) => {
  let id = 0;
  const cards = [];

  if (numSets > images.length) {
    throw new Error(
      `You've requested ${numSets} sets of cards, but there are only ${images.length} images available.`
    );
  }

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  };

  const indexUsed = [];
  for (let i = 0; i < numSets; i++) {
    let randomIndex = Math.floor(Math.random() * images.length);
    while (indexUsed.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
    indexUsed.push(randomIndex);
    const image = images[randomIndex];
    const card = {
      image,
      flipped: false,
      matched: false,
    };
    for (let j = 0; j < numPerSet; j++) {
      cards.push({ ...card, id: ++id });
    }
  }
  return shuffle(cards);
};

export default calcCardSet;
