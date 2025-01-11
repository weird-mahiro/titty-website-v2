<script lang="ts">
  import { Menu } from "lucide-svelte";
  import MenuButton from "./button/MenuButton.svelte";
</script>

<header
  class="fixed left-0 right-0 top-0 z-30 flex items-center justify-between p-8"
>
  <a href="/"><img class="w-12 md:w-16" src="/logo.svg" alt="" /></a>
  <MenuButton />
</header>
