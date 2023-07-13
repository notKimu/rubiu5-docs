<script lang="ts">
    import "../css/globals.css";
    import "../css/levels.css";
</script>

<header>
    <a href="/">
        <h1 class="title">Rubiu5</h1>
    </a>
</header>
<div class="filler" />

<slot />

<style>
    header {
        height: var(--rem-5);
        width: 100dvw;
        position: fixed;

        display: flex;
        align-items: center;
        justify-content: space-between;

        backdrop-filter: blur(10px);
        background-color: #131313ca;
        box-shadow: 0 0 var(--rem-05) var(--rem-02) azure;
        padding: var(--rem-05);

        z-index: 1000;
    }

    .filler {
        height: var(--rem-5);
        width: 100dvw;
    }
</style>