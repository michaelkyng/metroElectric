<template>
  <div>
    <NavBar class="sticky top-0 bg-white w-full z-30" />
    <NuxtPage :data="cards" />
    <Footer class="p-5" />
  </div>
</template>

<script lang="ts" setup>
const cards = [
  {
    link: "corporate-ev-fleet",
    image: "corporate.webp",
    title: "Corporate EV Fleet",
    description:
      "We offer comprehensive electric vehicle solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
  },
  {
    link: "green-fleet",
    image: "greenfleet.webp",
    title: "GreenFleet: Public Transportation Renewal ",
    description:
      "GreenFleet is our EV Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.",
  },
  {
    link: "metro-charge",
    image: "metro.webp",
    title: "Metro Charge: EV Charging Infrastructure ",
    description:
      "Recognising the importance of supporting infrastructure, Metro Charge is our network of EV charging stations in partnership with SOLATLANTIC Ltd., dedicated to ensuring seamless and convenient charging for all Electric Vehicle users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.",
  },
  {
    link: "ryde",
    image: "ryde.webp",
    title: "RYDE: Ride-Hailing And Sharing Services ",
    description:
      "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned EV assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa",
  },
  {
    link: "assembli",
    image: "assembli.webp",
    title: "ASSEMBLI: EV Assembly Network ",
    description:
      "ASSEMBLI is our extensive network of EV Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.",
  },
  {
    link: "ev-care",
    image: "evCare.webp",
    title: "EV Care: Electric Vehicle Maintenance Services ",
    description:
      "EV Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
  },
];
</script>
<style sccoped>
html {
  font-family: "Varela Round", sans-serif;
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}
</style>
