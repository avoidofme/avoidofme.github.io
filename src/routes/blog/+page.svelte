<script>
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="bg-brand-bg h-full p-4 rounded-md"
>
  <p>this is blog</p>
  <p>let's sat this one of the post</p>
  <a href="/blog/aaa" class="link">aaa</a>
</div>
