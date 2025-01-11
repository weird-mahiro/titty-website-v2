<script lang="ts">
  import { Copy } from "lucide-svelte";
  import { config } from "../../config";
  import CopyButton from "./button/CopyButton.svelte";
  import DisableInput from "./input/DisableInput.svelte";
  import TextLink from "./button/TextLink.svelte";
</script>

<!-- Putting px-8 for the input overflow -->
<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="mb-8 flex justify-center md:mb-12">
    <h1 class="font-monoton text-5xl md:text-7xl">Buy</h1>
  </div>
  <div class="mx-auto mb-8 flex max-w-[1000px] gap-2 md:mb-12">
    <DisableInput ca={config.ca} />
    <CopyButton info={config.ca}><Copy /></CopyButton>
  </div>
  <div class="mb-8 flex justify-center md:mb-12">
    <h2 class="text-2xl md:text-3xl">Or</h2>
  </div>
  <div class="flex justify-center">
    <TextLink url={config.jup}>Buy at Jup.ag</TextLink>
  </div>
</div>
