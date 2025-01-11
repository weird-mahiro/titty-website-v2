<script lang="ts">
  import { config } from "../../config";
</script>

<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {#each config.posters as poster}
      <img src={poster} alt="" />
    {/each}
  </div>
</div>
