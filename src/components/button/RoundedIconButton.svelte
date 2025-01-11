<script lang="ts">
  // Using "#_" for no action href
  let { url, children }: { url: string; children: any } = $props();
</script>

<a
  href={url}
  class="flex h-12 w-12 items-center justify-center rounded-full bg-black px-2 py-2 font-medium text-white md:h-14 md:w-14 md:px-2 md:py-2"
>
  {@render children()}
</a>
