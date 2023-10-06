<template>
  <div class="container">
    <div class="board">
      <div v-for="image in cardFrontsSet">
        <PlayingCard
          :frontImg="image"
          :backImg="randomCardBack"
          :timeout="timeout"
          :key="image.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import avatars from '@/assets/data/avatarImages.json';
import cardBackImgs from '@/assets/data/cardBackImages.json';
import cardFrontImgs from '@/assets/data/cardFrontImages.json';
import PlayingCard from './PlayingCard.vue';
import calcCardSet from '@/util/cardSet.js';

const randomCardBack =
  cardBackImgs[Math.floor(Math.random() * cardBackImgs.length)];
const theme = 'pokemon';
const numberOfSets = 10;
const cardsPerSet = 2;
const cardFrontsSet = calcCardSet(
  numberOfSets,
  cardsPerSet,
  cardFrontImgs[theme]
);

const timeout = 2000;

// const noMatch = () => {
//   setTimeout(() => {
//     showCardFront.value = false;
//   }, timeout);
// };
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
