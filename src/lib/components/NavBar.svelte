<script lang="ts">
  import type { User } from '@supabase/supabase-js';

  const { currentUser }: { currentUser?: User } = $props();
</script>

<div class="dsy-navbar rounded-box bg-base-100">
  <div class="flex-1">
    <a class="dsy-btn dsy-btn-ghost text-xl" href="/">Copper Clock</a>
  </div>
  <div class="flex-none">
    <ul class="dsy-menu dsy-menu-horizontal px-1">
      <li>
        {#if currentUser}
          <details class="dsy-dropdown dsy-dropdown-end">
            <summary>{currentUser.email}</summary>
            <ul
              class="dsy-menu dsy-dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow">
              <li><a href="/logout">Logout</a></li>
            </ul>
          </details>
        {/if}
      </li>
    </ul>
  </div>
</div>
