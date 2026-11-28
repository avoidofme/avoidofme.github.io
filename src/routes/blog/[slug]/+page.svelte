<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import type { PageProps } from "./$types";

  let { data, params }: PageProps = $props();
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
      <p class="text-4xl font-bold tracking-tight">some title here</p>
      <p>some desc here.</p>
    </div>
    <a href="/blog">back to blogo</a>
  </div>
  <p>blog post be like</p>
  <p>{params.slug}</p>
</div>
