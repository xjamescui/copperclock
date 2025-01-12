<script lang="ts">
  import { page } from '$app/state';
</script>

<div class="flex items-center justify-center py-20">
  <div class="prose flex flex-col items-center gap-y-2">
    <h3>Please Sign In</h3>
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
      <input type="submit" class="dsy-btn dsy-btn-primary" value="Login" />
    </form>
  </div>
</div>
