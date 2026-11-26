<script>
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<!--div class="flex-1 flex items-center justify-center">
    <img
        src="https://thecorporation.neocities.org/icon/construct.gif"
        alt="under construction"
        class="scale-[20]"
    />
    <p class="z-10 text-brand-bg">broken by choice.</p>
</div-->

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="bg-brand-bg h-full p-4"
>
  <p>this is blog</p>
  <p>let's sat this one of the post</p>
  <a href="/blog/aaa" class="link">aaa</a>
</div>
