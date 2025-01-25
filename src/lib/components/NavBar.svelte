<script lang="ts">
  import type { User } from '@supabase/supabase-js';
  import logo from '$lib/assets/copperclock-logo.webp';
  const { currentUser }: { currentUser?: User } = $props();
</script>

{#snippet logoAvatar()}
  <div class="dsy-avatar flex-none">
    <div class="w-8 rounded-full">
      <img src={logo} alt="logo" />
    </div>
  </div>
{/snippet}

<nav class="sticky top-0 w-full bg-base-100 px-2 pt-1">
  <div class="dsy-navbar rounded-box bg-base-100 shadow">
    <div class="flex-1">
      <a class="dsy-btn dsy-btn-ghost px-2 text-xl" href="/">
        {@render logoAvatar()}
        Copper Clock</a>
    </div>
    <div class="flex-none">
      <ul class="dsy-menu dsy-menu-horizontal px-1">
        <li>
          {#if currentUser}
            <details class="dsy-dropdown dsy-dropdown-end">
              <summary>Me</summary>
              <ul
                class="dsy-menu dsy-dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
                <li><p>{currentUser.email}</p></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </details>
          {/if}
        </li>
      </ul>
    </div>
  </div>
</nav>
