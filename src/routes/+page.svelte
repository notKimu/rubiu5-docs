<script lang="ts">
  import categories from "../assets/database/categories.json";
  import rubiu5 from "../assets/img/rubiu5.webp";
  import waves from "../assets/img/waves.svg";
</script>

<section class="presentation">
  <img src={rubiu5} alt="Rubiu5 bot profile" />
  <div class="text-cover">
    <h1>RUBIU5</h1>
  </div>
</section>

<section class="categories">
  <img src={waves} class="interdiv" alt="waves between sections" />

  <h1>Categorías</h1>
  <div class="categories-container">
    {#each categories as category}
      <a class="category" href={category.name.toLowerCase()}>
        <h1>{category.name}</h1>
        <img src={category.img} alt="icon of the category" />
      </a>
    {/each}
  </div>
</section>

<style>
  .presentation {
    height: calc(100dvh - var(--rem-5));
    width: 100dvw;
    position: relative;

    display: flex;
    justify-content: center;

    padding-top: var(--rem-1);
  }

  .presentation img {
    height: 100%;
    filter: drop-shadow(0 0 var(--rem-2) black);
    z-index: 2;
  }

  .text-cover {
    height: calc(100dvh - var(--rem-5));
    width: 100dvw;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .presentation h1 {
    background-image: radial-gradient(circle, azure 0%, transparent 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30dvw;
    transition: transform 0.1s ease-in-out;
  }

  .categories {
    height: 100dvh;
    width: 100dvw;
    position: relative;

    display: grid;
    grid-template-rows: var(--rem-5) 1fr;

    padding: var(--rem-1);
  }

  .interdiv {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;

    filter: drop-shadow(0 -1rem var(--rem-2) black);
    pointer-events: none;
    z-index: 3;
  }

  .categories h1 {
    font-size: var(--rem-3);
    grid-row: 1;
    z-index: 4;
  }

  .categories-container {
    height: 100%;
    grid-row: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: var(--rem-05);
    z-index: 5;
  }

  .category {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: var(--rem-05);
  }

  .category img {
    height: var(--rem-35);
    opacity: 0;
    transform: rotate(-10deg);
  }

  .category:hover img {
    animation: bouncy-spin 0.3s;
    animation-timing-function: bezier(0.47, 1.64, 0.41, 0.8);
    opacity: 1;
  }

  @keyframes bouncy-spin {
    0% {
      filter: blur(5px);
      transform: translateX(25%) rotate(-60deg);
    }
    100% {
      filter: blur(0);
      transform: translateX(0) rotate(-10deg);
    }
  }

  .category:not(:hover) {
    color: #f0ffff98;
  }

  @media screen and (max-width: 723px) {
    .interdiv {
      width: 200%;
    }
  }

  @media screen and (max-width: 444px) {
    .categories h1 {
      font-size: var(--rem-2);
    }

    .category img {
      height: var(--rem-3);
    }
  }

  @media screen and (max-width: 324px) {
    .category img {
      display: none;
    }
  }
</style>
