<script lang="ts">
  import { isMenuOpen } from "../../shared.svelte";
  import { Menu, X } from "lucide-svelte";
</script>

{#if isMenuOpen.menu == false}
  <button
    onclick={() => (isMenuOpen.menu = !isMenuOpen.menu)}
    class="flex h-12 w-12 items-center justify-center rounded-full bg-black px-2 py-2 font-medium text-white md:h-14 md:w-14 md:px-2 md:py-2"
  >
    <Menu class="h-6 w-6 md:h-8 md:w-8" /></button
  >
{:else}
  <button
    onclick={() => (isMenuOpen.menu = !isMenuOpen.menu)}
    class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black px-2 py-2 font-medium text-white md:h-14 md:w-14 md:px-2 md:py-2"
  >
    <X class="h-6 w-6 md:h-8 md:w-8" /></button
  >
{/if}
