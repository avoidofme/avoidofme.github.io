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
	import { scale } from "svelte/transition";
	import { backInOut, cubicOut } from "svelte/easing";

	let { children }: LayoutProps = $props();

	let lenis: Lenis;

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

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
		lenis?.resize();
		ScrollTrigger.refresh();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="text-brand-primary bg-brand-bg">
	<div class="max-w-screen w-5xl min-h-svh mx-auto space-y-4 flex flex-col">
		<Navbar />
		{#key page.url.pathname}
			<main
				class="max-w-screen w-245 mx-auto flex-1 flex flex-col p-4 bg-brand-base lg:rounded-sm lg:shadow-black lg:shadow-lg"
				in:scale={{
					opacity: 0,
					duration: 400,
					start: 0.92,
					easing: cubicOut,
				}}
			>
				{@render children()}
			</main>
		{/key}
		<Footer />
	</div>
</div>
