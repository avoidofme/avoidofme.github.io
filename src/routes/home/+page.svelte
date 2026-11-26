<script>
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<!--div>
    <p>
        this site is under construction tho lol gtg take a nap ig lmk imo fyi
        lwk so eepy.
    </p>
    <img
        src="https://thecorporation.neocities.org/icon/construct.gif"
        alt="under construction"
        class="m-2"
    />
    <div class="h-screen"></div>
</div-->

<main
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="flex-1 mx-1 p-4 bg-brand-bg rounded-md"
>
  <p>hello</p>
</main>
