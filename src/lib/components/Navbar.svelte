<script lang="ts">
  import gsap from "gsap";

  function navbarIn(node: gsap.TweenTarget, { duration = 0.4 } = {}) {
    const ctx = gsap.context(() => {
      gsap.from(node, {
        y: -64,
        opacity: 0,
        duration,
        ease: "power3.out",
        onComplete: () => {
          ctx.revert();
        },
      });
    });
    return { duration: duration * 1000 };
  }

  let { enable = true } = $props();
</script>

{#if enable}
  <nav
    in:navbarIn
    class="h-12 flex px-4 items-center justify-between font-bold"
  >
    <a href="/" class="flex-1 text-brand-primary">avoidofme</a>
    <span class="flex-1 text-center font-normal">hello world</span>
    <div class="flex-1 flex items-center justify-end gap-4">
      <a href="/home" class="text-end">home</a>
      <a href="/blog" class="text-end">blog</a>
      <a href="/about" class="text-end">about</a>
    </div>
  </nav>
{/if}
