<script lang="ts">
  let { showJumpToTop = false } = $props();

  import scrollToHash from "#lib/scrolltohash.ts";
</script>

<footer
  class="h-12 px-4 flex items-center justify-between text-xs text-kanagawa-black-light"
>
  <p>
    © {new Date().getFullYear()} avoidofme. All rights reserved.
  </p>
  {#if showJumpToTop}
    <a onclick={(e) => scrollToHash(e, "#top")} href="#top">jump to top</a>
  {/if}
</footer>
