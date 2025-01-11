<script lang="ts">
  import { config } from "../../config";
  // Need to compensate the translation
</script>

<div class="pt-48 md:pt-56">
  <div class="relative mb-24 md:mb-32 md:px-[120px]">
    <div class="absolute -top-14 mx-auto px-8 md:-top-24">
      <div class="grid grid-cols-12">
        <div class="col-span-12 col-start-1 lg:col-start-3 xl:col-start-4">
          <img class="w-80 md:w-[30rem]" src={config.banner[0].svgUrl} alt="" />
        </div>
      </div>
    </div>
    <div class="w-full">
      <img class="w-full" src={config.banner[0].image} alt="" />
    </div>
  </div>
</div>
