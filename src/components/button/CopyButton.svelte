<script lang="ts">
  import { Copy } from "lucide-svelte";
  import { toast } from "svelte-sonner";
  let { info }: { info: string } = $props();
</script>

<button
  onclick={() => {
    toast.success("Copied");
    navigator.clipboard.writeText(info);
  }}
  class="flex h-16 w-16 items-center justify-center border-2 border-black bg-black px-4 py-4 font-medium text-white transition duration-200 ease-out hover:bg-white hover:text-black"
>
  <Copy />
</button>
