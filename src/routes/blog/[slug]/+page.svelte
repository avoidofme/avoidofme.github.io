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
  class="bg-brand-bg h-full p-4 rounded-md"
>
  <p>blog post be like</p>
  <p>{params.slug}</p>
</div>
