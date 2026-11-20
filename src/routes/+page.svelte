<script lang="ts">
    import gsap from "gsap";

    let identities = ["Deni Susanto", "@avoidofme", "@avom.valtz"];
    let index = $state(0);
    let identity: HTMLElement | undefined = $state();

    $effect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % identities.length;
        }, 3000);

        return () => clearInterval(interval);
    });

    $effect(() => {
        const _current = index;

        if (identity) {
            gsap.fromTo(
                identity,
                {
                    opacity: 0,
                    filter: "blur(4px)",
                },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power3.out",
                },
            );
        }
    });

    $effect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-animate", {
                y: 64,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });
        });

        return () => {
            ctx.revert();
        };
    });
</script>

<div class="md:pt-12 flex-1 flex flex-col justify-between">
    <div class="space-y-4">
        <div>
            <h2 class="hero-animate text-4xl font-bold tracking-tight">
                Hey there, I am
            </h2>
            <h1 class="hero-animate text-6xl font-bold tracking-tight">
                {#key index}
                    <span bind:this={identity}>
                        {identities[index]}
                    </span>
                {/key}
            </h1>
        </div>
        <p class="hero-animate tracking-widest">Welcome welcome.</p>
        <div class="space-x-2">
            <a
                href="/home"
                class="hero-animate inline-block rounded-sm cursor-pointer px-4 py-2 bg-brand-bg border border-brand-border hover:border-brand-secondary transition-colors duration-200"
                >Homepage</a
            >
            <a
                href="/about"
                class="hero-animate inline-block rounded-sm cursor-pointer px-4 py-2 bg-brand-bg border border-brand-border hover:border-brand-secondary transition-colors duration-200"
                >About me</a
            >
        </div>
    </div>
    <div class="flex flex-col gap-4 items-end justify-end">
        <img
            src="https://thecorporation.neocities.org/icon/emptycart.gif"
            alt="empty card award"
        />
        <img
            src="https://www.internetbumperstickers.com/066811/n01/no_parking.gif"
            alt="no parking"
        />
        <img
            src="https://thecorporation.neocities.org/icon/banners/bdfs_ad.gif"
            alt="bdfs"
        />
    </div>
</div>
