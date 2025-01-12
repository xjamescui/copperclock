<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  let { children, data } = $props();
</script>

<NavBar currentUser={data.currentUser} />
<main class="container">
  {@render children()}
</main>
