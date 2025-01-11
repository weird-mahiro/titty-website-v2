<script lang="ts">
  import { flip } from "svelte/animate";
  import { isMenuOpen } from "../../shared.svelte";
  import { Menu, X } from "lucide-svelte";
</script>

<button
  onclick={() => (isMenuOpen.menu = !isMenuOpen.menu)}
  class="flex h-12 w-12 items-center justify-center rounded-full bg-black px-2 py-2 font-medium text-white md:h-14 md:w-14 md:px-2 md:py-2"
>
  {#if isMenuOpen.menu == false}
    <Menu class="h-6 w-6 md:h-8 md:w-8" />
  {:else}
    <X class="h-6 w-6 md:h-8 md:w-8" />
  {/if}
</button>
