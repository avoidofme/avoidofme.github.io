<script lang="ts">
    let scrollY = $state(0);

    let isScrolled = $derived(scrollY > 50);
</script>

<svelte:window bind:scrollY />

<nav
    class="z-99 sticky h-12 top-0 px-4 py-2 backdrop-blur-sm rounded-b-md transition-all duration-200 {isScrolled
        ? 'translate-y-4 rounded-md bg-brand-base/40'
        : 'bg-brand-base shadow-black shadow-md'}"
>
    <div class="flex h-full items-center justify-between">
        <a href="/" class="font-bold">avoidofme</a>
        <div class="space-x-4">
            <a href="/blog" class="hover:text-brand-secondary">blog</a>
        </div>
    </div>
</nav>
