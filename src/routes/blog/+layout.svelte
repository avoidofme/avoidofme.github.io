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
  class="flex-1 w-full grid grid-cols-4 gap-4"
>
  <main class="col-span-3">
    {@render children()}
  </main>
  <aside class="bg-brand-bg p-4 col-span-1">sidebar</aside>
</div>
