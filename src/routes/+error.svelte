<script lang="ts">
    import { page } from "$app/state";
</script>

<img src="https://http.cat/{page.status}" alt="status" class="py-2" />
<p>{page.error?.message}</p>
