<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Lenis from "lenis";

  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";

  import type { LayoutProps } from "./$types";

  import { afterNavigate, beforeNavigate } from "$app/navigation";

  import Navbar from "#lib/components/Navbar.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import { page } from "$app/state";
  import { scale, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { tick } from "svelte";

  let { children }: LayoutProps = $props();

  let lenis: Lenis;

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    lenis = new Lenis({
      duration: 1.2,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  });

  beforeNavigate(() => {
    lenis?.stop();
  });

  afterNavigate(async () => {
    lenis?.scrollTo(0, { immediate: true });
    lenis?.start();

    await tick();

    lenis?.resize();
    ScrollTrigger.refresh();
  });

  let clientHeight = $state(0);
  let showJumpToTop = $derived(clientHeight > 1200);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!--div bind:clientHeight>
  <div
    class="max-w-screen w-6xl min-h-svh mx-auto space-y-4 flex flex-col items-center"
  >
    <Navbar />
    {#key page.url.pathname}
      <main
        id="top"
        class="max-w-full w-275 flex-1 flex flex-col p-4"
        in:scale={{
          opacity: 0,
          duration: 600,
          start: 0.92,
          easing: cubicOut,
        }}
      >
        {@render children()}
      </main>
      <Footer {showJumpToTop} />
    {/key}
  </div>
</div-->

<div
  bind:clientHeight
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="max-w-screen w-365 min-h-svh mx-auto flex flex-col select-none"
>
  <Navbar enable={!(page.url.pathname === "/")} />
  {@render children()}
  <Footer {showJumpToTop} />
</div>
