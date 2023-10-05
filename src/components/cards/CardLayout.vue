<template>
  <div class="container">
    <div class="board">
      <div v-for="image in placeholderImages">
        <PlayingCard :images="image" :timeout="timeout" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayingCard from './PlayingCard.vue';

const placeholderImages = [
  {
    front: 'src/assets/images/cards/fronts/pokemon/4.png',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front: 'src/assets/images/cards/fronts/pokemon/4.png',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1503045666024-95470ad39b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1503045666024-95470ad39b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1525279844598-52fd0d3fecc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
  {
    front:
      'https://images.unsplash.com/photo-1525279844598-52fd0d3fecc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    back: 'src/assets/images/cards/backs/pokemon.png',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
}

shuffleArray(placeholderImages);

const timeout = 2000;

const noMatch = () => {
  setTimeout(() => {
    showCardFront.value = false;
  }, timeout);
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.board {
  width: 100%;
  height: 50%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
}
</style>
