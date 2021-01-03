<script>
  import Filmstrip from "./Filmstrip.svelte";
  import siteData from "./siteData.js";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .overflowContainer {
    flex: 1;
    position: relative;

    flex-basis: 200px;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }

  :global(.overflowContainer > *) {
    flex-shrink: 0;
  }

  .titleBlock {
    background-color: white;

    z-index: 99;

    position: sticky;
    top: 0;
    height: var(--titleHeight);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 10px 0;
    margin-bottom: var(--bMargin);

    font-family: "Open Sans";
  }

  .titleBlock img {
    height: calc(var(--titleHeight) - 30px);
    pointer-events: none;
    filter: contrast(0) brightness(0.2);
  }

  .titleBlock p {
    margin: 4px;
  }

  .titleBlock .modeToggle {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;

    opacity: 0.6;
    transition: opacity 0.3s;
  }

  .titleBlock .modeToggle:hover {
    opacity: 1;
  }
</style>

<div class="container">
  <div class="titleBlock gradientAnim">
    <h1>Generic Cards List Page</h1>
  </div>

  <div class="overflowContainer">
    {#each siteData.filter((d) => d.content && d.content.length) as data}
      <Filmstrip items={data} />
    {/each}
  </div>
</div>
