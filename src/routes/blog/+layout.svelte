<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="flex-1 w-full flex flex-col md:flex-row gap-4"
>
  <main class="md:flex-2 lg:flex-3">
    {@render children()}
  </main>
  <aside class="-order-1 md:order-1 md:flex-1">
    <p class="bg-brand-base px-4 py-2 text-center">Top singko blog post</p>
  </aside>
</div>
