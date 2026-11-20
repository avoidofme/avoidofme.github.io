<script lang="ts">
    let { showJumpToTop = false } = $props();

    import scrollToHash from "#lib/scrolltohash.ts";
</script>

<footer
    class="z-10 flex items-center justify-between text-center text-xs md:text-start w-full h-8 px-5 py-2 lg:rounded-t-md bg-brand-base lg:shadow-black lg:shadow-md"
>
    © 2026 avoidofme — All rights reserved.
    {#if showJumpToTop}
        <a
            onclick={(e) => scrollToHash(e, "#top")}
            href="#top"
            class="text-xs underline underline-offset-4 decoration-dotted"
            >jump to top</a
        >
    {/if}
</footer>
