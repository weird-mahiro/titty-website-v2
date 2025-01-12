<script lang="ts">
  // Using on click to change between copy and tick adding later
  // Need to add footer
  import { config } from "../config";
  import NavBar from "./components/NavBar.svelte";
  import Banner1 from "./components/Banner1.svelte";
  import Buy from "./components/Buy.svelte";
  import Banner2 from "./components/Banner2.svelte";
  import InformationTemplate from "./components/InformationTemplate.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Footer from "./components/Footer.svelte";
  import Menu from "./components/Menu.svelte";
  import { isMenuOpen } from "./shared.svelte";
  import { Toaster } from "svelte-sonner";
</script>

<Toaster position="bottom-center" />

<NavBar />

<Menu />

<div class="pt-48 md:pt-56">
  <Banner1 />
  <Buy />
  <Banner2 />
  <InformationTemplate
    title={config.section[0].title}
    details={config.section[0].details}
  />
  <Gallery />
  <InformationTemplate
    title={config.section[1].title}
    details={config.section[1].details}
  />
  <Footer />
</div>
