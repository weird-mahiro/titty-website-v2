<script lang="ts">
  let { title, details }: { title: string; details: string } = $props();
</script>

<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="mb-8 flex justify-center md:mb-12">
    <h1 class="font-monoton text-5xl md:text-7xl">{title}</h1>
  </div>
  <div class="mx-auto mb-8 flex max-w-[1000px] gap-2 md:mb-12">
    <p class="text-2xl md:text-3xl">{details}</p>
  </div>
</div>
