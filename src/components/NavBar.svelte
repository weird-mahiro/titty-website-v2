<script lang="ts">
  import { Menu } from "lucide-svelte";
  import RoundedIconButton from "./button/RoundedIconButton.svelte";
</script>

<header
  class="fixed left-0 right-0 top-0 z-30 flex items-center justify-between p-8"
>
  <a href="/"><img class="w-12 md:w-16" src="/logo.svg" alt="" /></a>
  <RoundedIconButton url="#_"
    ><Menu class="h-6 w-6 md:h-8 md:w-8" /></RoundedIconButton
  >
</header>
