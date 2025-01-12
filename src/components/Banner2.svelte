<script lang="ts">
  import { config } from "../../config";
</script>

<div class="pt-4 md:pt-8">
  <div class="relative mx-auto mb-24 flex justify-end md:mb-32 md:px-[120px]">
    <div class="absolute -top-6 mx-auto max-w-[1000px] px-8 md:-top-10">
      <h2 class="font-monoton text-5xl text-red md:text-7xl">
        {config.banner[1].text}
      </h2>
    </div>
    <div class="w-full">
      <img class="w-full" src={config.banner[1].image} alt="" />
    </div>
  </div>
</div>
