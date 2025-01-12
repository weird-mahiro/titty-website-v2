<script lang="ts">
  let { title, details }: { title: string; details: string[] } = $props();
</script>

<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="mb-8 flex justify-center md:mb-12">
    <h1 class="font-monoton text-5xl md:text-7xl">{title}</h1>
  </div>
  <div class="mx-auto max-w-[1000px] space-y-4 md:space-y-6">
    {#each details as detail}
      <p class="text-base md:text-2xl">{detail}</p>
    {/each}
  </div>
</div>
