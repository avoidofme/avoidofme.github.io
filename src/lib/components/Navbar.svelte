<script lang="ts">
  let { enable = true } = $props();
</script>

<nav
  class={`h-12 sticky flex px-4 items-center justify-between font-bold ${enable ? "" : "hidden"}`}
>
  <a href="/" class="flex-1 text-brand-primary">avoidofme</a>
  <span class="flex-1 text-center font-normal">hello world</span>
  <a href="/blog" class="flex-1 text-end">blog</a>
</nav>
