<template>
  <div class="card" :class="{ flipped: showCardFront }" @click="flipCard">
    <div class="card__back">
      <img :src="backImg" alt="" draggable="false" />
    </div>
    <div class="card__front">
      <img :src="frontImg.image" alt="" draggable="false" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  frontImg: {
    type: Object,
    required: true,
  },
  backImg: {
    type: String,
    required: true,
  },
  timeout: {
    type: Number,
    required: true,
  },
});

const showCardFront = ref(false);

const noMatch = () => {
  setTimeout(() => {
    showCardFront.value = false;
  }, props.timeout);
};

const flipCard = () => {
  console.log('flipCard');
  showCardFront.value = !showCardFront.value;
  noMatch();
};
</script>

<style scoped>
.card {
  width: 150px;
  height: 200px;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  perspective: 1000px;
  color: #fff;
  /* overflow: hidden; */
}

.card__front,
.card__back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 1s;
  border-radius: 10px;
  border: 1px solid #000;
  transform: translateZ(1px);
}

.card__front {
  transform: rotateY(-180deg) translateZ(1px);
  padding: 12px;
}

.card__back {
  transform: rotateY(0deg) translateZ(1px);
}

.card.flipped .card__back {
  transform: rotateY(180deg);
}

.card.flipped .card__front {
  transform: rotateY(0deg);
}

.card__back img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}

.card__front img {
  /* object-fit: contain; */
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}
</style>
