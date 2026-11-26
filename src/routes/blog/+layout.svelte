<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<div class="flex-1 w-full grid grid-cols-4 gap-4">
  <main class="bg-brand-bg col-span-3">
    {@render children()}
  </main>
  <aside class="bg-brand-bg p-4 col-span-1">sidebar</aside>
</div>
