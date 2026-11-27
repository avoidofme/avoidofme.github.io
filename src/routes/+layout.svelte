<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Lenis from "lenis";

  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";

  import type { LayoutProps } from "./$types";

  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { Draggable } from "gsap/Draggable";

  import Navbar from "#lib/components/Navbar.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import { page } from "$app/state";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { tick } from "svelte";

  let { children }: LayoutProps = $props();

  let lenis: Lenis;

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

  $effect(() => {
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

    const ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
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
  <title>personal site — avoidofme</title>
  <meta name="description" content="indescribable." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:title" content="avoidofme" />
  <meta property="og:description" content="indescribable." />
  <!--meta property="og:image" content="https://example.com" /-->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="avoidofme" />
  <meta name="twitter:description" content="indescribable." />
  <!--meta name="twitter:image" content="https://example.com" /-->
</svelte:head>

<div
  bind:clientHeight
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="max-w-screen w-365 min-h-svh mx-auto flex flex-col select-none"
>
  <div
    class="z-999 scroll-progress fixed top-0 left-0 bg-brand-border scale-x-0 w-full h-1 origin-top-left"
  ></div>
  <Navbar enable={!(page.url.pathname === "/")} />
  {@render children()}
  <Footer {showJumpToTop} />
</div>
