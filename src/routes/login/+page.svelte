<script lang="ts">
  import { page } from '$app/state';
  import logo from '$lib/assets/copperclock-logo.webp';
</script>

<div class="flex items-center justify-center py-20">
  <div class="flex flex-col items-center">
    <div class="dsy-avatar">
      <div class="w-24 rounded-full">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div class="prose my-5"><h3>Sign In</h3></div>
    {#if !!page.form?.errorMsg}
      <p class="rounded border border-red-300 bg-red-100 p-2 text-red-500">
        Error: {page.form.errorMsg}
      </p>
    {/if}
    <form method="POST" class="flex flex-col gap-y-5">
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
