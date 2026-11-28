<script>
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="h-full"
>
  <div
    class="h-24 px-4 py-2 mb-4 bg-brand-base flex items-center justify-between gap-4"
  >
    <div class="flex-1">
      <p class="text-4xl font-bold tracking-tight">Blog Posts</p>
      <p>nonsense collection.</p>
    </div>
    <input
      class="flex-1 outline rounded-md px-4 py-2"
      placeholder="search is not available yet lol."
    />
  </div>
  <div>
    <a href="/blog/aaa" class="inline-block bg-brand-base p-4">aaa</a>
  </div>
</div>
