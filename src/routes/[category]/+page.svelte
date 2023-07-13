<script lang="ts">
  import { page } from "$app/stores";
  let urlPrams = $page.params.category;

  export let data;
  const commands = data.commands;
</script>

<main class={urlPrams}>
  {#if commands === undefined}
    <div class="error-container">
      <h1>¡Esta página no existe!</h1>
    </div>
  {:else}
    <div class="commands">
      {#each commands as command}
        <div class="command">
          <h1>{command.name}</h1>
          {#if command.options}
            <h3>{command.options}</h3>
          {/if}
          <p>{command.description}</p>
          <div class={`lvl-tag lvl${command.level}`}>
            <p>Level {command.level}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  main {
    width: 100dvw;
    display: flex;
    justify-content: center;
  }

  .error-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--rem-2);
  }

  .commands {
    width: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: var(--rem-05);

    padding: var(--rem-2);
  }

  .command {
    display: flex;
    flex-direction: column;
    gap: var(--rem-05);

    background-color: var(--command-bg-color);
    border: 1px solid var(--command-border-color);
    border-radius: var(--rem-05);
    backdrop-filter: blur(2.5px);
    padding: var(--rem-1);
  }

  .command h1::before {
    content: "/";
  }

  .command h3 {
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      #f0ffff22 10px,
      #f0ffff22 15px
    );
  }

  .lvl-tag {
    margin-top: auto;
  }

  @media screen and (max-width: 723px) {
    .commands {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
</style>
