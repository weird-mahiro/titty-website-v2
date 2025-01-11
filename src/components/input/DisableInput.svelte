<script lang="ts">
  let { ca }: { ca: string } = $props();
</script>

<input
  class="w-full border-2 bg-grey px-4 py-4 text-black hover:shadow-none focus:shadow-none"
  disabled={true}
  value={ca}
/>
