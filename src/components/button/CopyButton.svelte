<script lang="ts">
  // Using "#_" for no action href
  let { info, children }: { info: string; children: any } = $props();
</script>

<button
  onclick={() => navigator.clipboard.writeText(info)}
  class="flex h-16 w-16 items-center justify-center border-2 border-black bg-black px-4 py-4 font-medium text-white transition duration-200 ease-out hover:bg-white hover:text-black"
>
  {@render children()}
</button>
