<script lang="ts">
  let { url, children }: { url: string; children: any } = $props();
</script>

<a
  href={url}
  target="_blank"
  class="group relative inline-block px-8 py-4 text-xl font-medium"
>
  <span
    class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"
  ></span>
  <span
    class="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"
  ></span>
  <span class="relative text-black group-hover:text-white"
    >{@render children()}</span
  >
</a>
