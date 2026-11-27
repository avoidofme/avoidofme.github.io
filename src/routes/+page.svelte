<script lang="ts">
  import gsap from "gsap";
  import House from "@lucide/svelte/icons/house";
  import UserRound from "@lucide/svelte/icons/user-round";

  let identities = ["Deni Susanto", "@avoidofme", "@avom.valtz"];
  let index = $state(0);
  let identity = $state();

  $effect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % identities.length;
    }, 3000);

    return () => clearInterval(interval);
  });

  $effect(() => {
    if (identity) {
      gsap.from(identity, {
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.8,
        ease: "power3.out",
      });
    }
  });

  $effect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 64,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => {
      ctx.revert();
    };
  });
</script>

<div class="flex-1 flex items-center justify-center">
  <div
    class="max-w-screen w-5xl px-4 -translate-y-24 flex flex-col items-start md:flex-row md:items-end md:justify-between"
  >
    <div>
      <div>
        <p class="hero-animate text-3xl font-bold">Hey there! I am,</p>
        <h1
          class="hero-animate text-6xl md:text-8xl text-brand-primary font-bold tracking-tight"
        >
          {#key index}
            <span bind:this={identity}>
              {identities[index]}
            </span>
          {/key}
        </h1>
        <p class="hero-animate border-l-4 pl-4 mt-2 font-serif">
          <i>"to care is to let go."</i> — my last braincell
        </p>
      </div>
      <div class="md:flex w-screen md:w-full -mx-4 md:mx-auto px-4 gap-4">
        <a
          href="/home"
          class="hero-animate w-full md:w-48 flex items-end gap-2 justify-center mt-4 p-2 bg-brand-secondary text-kanagawa-black text-lg font-bold"
          ><span>home</span> <House /></a
        >
        <a
          href="/about"
          class="hero-animate w-full md:w-48 flex items-end gap-2 justify-center mt-4 p-2 border border-brand-secondary text-brand-secondary text-lg font-bold"
          ><span>about</span> <UserRound /></a
        >
      </div>
    </div>
    <img
      src="https://avatars.githubusercontent.com/u/285938264"
      alt="pfp"
      class="hero-animate w-64 mb-12 mx-auto md:m-0 border-4 -order-1 md:order-1 block"
    />
  </div>
</div>
