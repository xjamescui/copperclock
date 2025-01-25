<script lang="ts">
  import { page } from '$app/state';
  import logo from '$lib/assets/copperclock-logo.webp';
  import ErrorBanner from '$lib/components/ErrorBanner.svelte';
</script>

<div class="flex items-center justify-center py-20">
  <div class="flex flex-col items-center gap-y-5">
    <div class="dsy-avatar">
      <div class="w-24 rounded-full">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div class="prose mt-5"><h3>Sign In</h3></div>
    {#if !!page.form?.errorMsg}
      <ErrorBanner>
        Error: {page.form.errorMsg}
      </ErrorBanner>
    {/if}
    <form method="POST" class="flex w-full flex-col gap-y-5">
      <input
        type="text"
        name="email"
        placeholder="Email"
        class="dsy-input dsy-input-bordered w-full" />
      <input
        type="password"
        name="password"
        placeholder="Password"
        class="dsy-input dsy-input-bordered w-full" />
      <input type="submit" class="dsy-btn" value="Login" />
    </form>
  </div>
</div>
