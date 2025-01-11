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
</script>

<NavBar />

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
