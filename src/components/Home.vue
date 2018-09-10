<template>
  <v-layout align-center justify-center column fill-height lg2 sm2 md2>
    <div class="scene">
      <div class="cube">
        <div class="side back backImg"></div>
        <div class="side left backImg"></div>
        <div class="side right backImg"></div>
        <div class="side top backImg"></div>
        <div class="side bottom backImg"></div>
        <div class="side front backImg"></div>
      </div>
    </div>
  </v-layout>
</template>

<style>
.side {
  box-sizing: border-box;
  transition: 1s;
}

.scene {
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.scene:hover {
  transform: scale(1.5);
}

.scene:hover .side {
  opacity: 1;
}

.cube {
  transform-style: preserve-3d;
  position: relative;
  width: 100px;
  height: 100px;
  animation: rotate 10s ease-in-out infinite;
  transform-origin: center center;
}

.side {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #333;
  opacity: 0.95;
  background-size: cover;
  background-repeat: no-repeat;
}

.backImg {
  background-image: url("https://www.edigitalagency.com.au/wp-content/uploads/best-instagram-logo-gif.gif");
}

.back {
  transform: translateZ(-70px) rotateX(180deg);
}

.left {
  transform: translateX(-70px) rotateY(90deg);
}

.right {
  transform: translateX(70px) rotateY(90deg);
}

.top {
  transform: translateY(-70px) rotateX(90deg);
}

.bottom {
  transform: translateY(70px) rotateX(270deg);
}

.front {
  transform: translateZ(70px);
}

@keyframes rotate {
  0% {
    transform: rotateX(0);
  }

  12.5% {
    transform: rotateY(90deg);
  }

  25% {
    transform: rotateY(270deg);
  }

  37.5% {
    transform: rotateY(270deg);
  }

  50% {
    transform: rotateY(360deg);
  }

  62.5% {
    transform: rotateX(90deg);
  }

  75% {
    transform: rotateX(180deg);
  }

  87.5% {
    transform: rotateX(270deg);
  }

  100% {
    transform: rotateX(360deg);
  }
}
</style>