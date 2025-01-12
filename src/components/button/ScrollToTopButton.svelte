<script>
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<button
  class="invisible absolute bottom-6 right-6 -rotate-90 md:visible"
  on:click={goToTop}
>
  <img src="/arrow-up.svg" alt="" />
</button>
