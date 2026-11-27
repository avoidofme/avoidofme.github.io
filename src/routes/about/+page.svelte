<script lang="ts">
  import bg from "#lib/assets/background.jpg";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  style="background-image: url({bg});"
  class="flex-1 flex items-center justify-center rounded-md mx-1 lg:mx-0 bg-center bg-cover bg-no-repeat"
>
  <div class="max-w-screen w-xl p-4 text-center">
    <p>I am still thinking about it.</p>
  </div>
</div>
