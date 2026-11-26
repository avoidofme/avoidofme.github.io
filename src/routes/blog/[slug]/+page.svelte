<script lang="ts">
  import type { PageProps } from "./$types";

  let { data, params }: PageProps = $props();
</script>

<div>
  <p>blog post be like</p>
  <p>{params.slug}</p>
</div>
