<script lang="ts">
  import { page } from "$app/state";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="flex-1 flex p-4 items-center justify-center"
>
  <div class="bg-brand-bg">
    <img src="https://http.cat/{page.status}" alt="status" class="w-xl" />
    <p class="py-2 px-4">{page.error?.message}</p>
  </div>
</div>
