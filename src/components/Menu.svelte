<script lang="ts">
  import { config } from "../../config";
</script>

<div class="fixed bottom-0 left-0 right-0 top-0 z-20">
  <div
    class="h-full w-full overflow-y-auto overflow-x-hidden bg-black px-8 pt-32 text-white md:px-[120px] md:pt-36"
  >
    <div class="pt-12 md:pt-24">
      <ul class="space-y-8 text-3xl md:space-y-16 md:text-6xl">
        {#each config.socials as social}
          <li>
            <a
              class="hover:text-red hover:underline"
              href={social.url}
              target="_blank">{social.type}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
