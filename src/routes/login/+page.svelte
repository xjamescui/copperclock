<script lang="ts">
  import { page } from '$app/state';
  import logo from '$lib/assets/copperclock-logo.webp';
  import ErrorBanner from '$lib/components/ErrorBanner.svelte';
  import { validateEmail, validatePassword } from '$lib/utils';

  let email = $state('');
  let password = $state('');
  let currentError = $state<string | undefined>(page.form?.errorMsg);

  function handleSubmit(event: Event) {
    const { valid: isEmailValid, error: emailError } = validateEmail(email);

    if (!isEmailValid) {
      currentError = emailError;
      event.preventDefault();
      return;
    }

    const { valid: isPasswordValid, error: passwordError } =
      validatePassword(password);
    if (!isPasswordValid) {
      currentError = passwordError;
      event.preventDefault();
    }
  }
</script>

<div class="flex items-center justify-center py-20">
  <div class="flex flex-col items-center gap-y-5">
    <div class="dsy-avatar">
      <div class="w-24 rounded-full">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div class="mt-5 text-xl font-bold">Sign In</div>
    {#if !!currentError}
      <ErrorBanner>
        Error: {currentError}
      </ErrorBanner>
    {/if}
    <form
      method="POST"
      class="flex w-full flex-col gap-y-5"
      onsubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        bind:value={email}
        class="dsy-input dsy-input-bordered w-full" />
      <input
        type="password"
        name="password"
        placeholder="Password"
        bind:value={password}
        class="dsy-input dsy-input-bordered w-full" />
      <input type="submit" class="dsy-btn" value="Login" />
    </form>
  </div>
</div>
