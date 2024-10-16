<template>
  <div :class="container" class="py-20 space-y-20">
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-3xl md:text-4xl">MEDIA Center</h1>
        <p class="text-[#1C6220] text-xl">
          Stay Informed with the Latest News and Updates
        </p>
      </div>

      <div class="flex flex-col gap-2.5">
        <div class="relative flex flex-col h-[500px] w-full justify-end">
          <video
            src="/video.mp4"
            autoplay
            loop
            class="absolute top-0 left-0 size-full object-cover"
          ></video>
          <div class="p-5 bg-black/15 backdrop-blur-sm gap-2.5">
            <p class="text-white text-lg font-noto">Powering the Future</p>
            <h2 class="text-white text-3xl font-main">
              Next-gen EVs for a cleaner tomorrow.
            </h2>
          </div>
        </div>
        <div class="relative flex gap-2.5">
          <MediaItem
            class="w-9/12"
            :title="blogs[0].title"
            :description="blogs[0].description"
            :slug="blogs[0].slug"
            :content="blogs[0].content"
            :date="blogs[0].date"
            :minutes-read="blogs[0].minutesRead"
            :tags="blogs[0].tags"
            :image="blogs[0].image"
          />
          <div class="w-3/12">
            <NuxtLink
              to="/#contact"
              class="flex size-full justify-center items-center bg-[#113912] hover:bg-[#1C6220] text-2xl text-white/80 hover:text-white transition-colors duration-200"
              >Contact us</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-3xl md:text-4xl">Latest News</h1>
        <p class="text-[#1C6220] text-xl">
          Stay Informed with the Latest News and Updates
        </p>
      </div>

      <div class="flex flex-col items-center gap-2.5">
        <div
          class="relative grid grid-flow-row-dense justify-center w-full gap-2.5 last:col-span-12 overflow-hidden transition-all duration-300 ease-in"
          :class="`h-[${blogSize}vh]`"
        >
          <MediaItem
            v-for="(blog, index) in blogs"
            :class="index == 0 || index % 3 == 0 ? 'col-span-12' : 'col-span-6'"
            :title="blog.title"
            :description="blog.description"
            :slug="blog.slug"
            :content="blog.content"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
            :tags="blog.tags"
            :image="blog.image"
          />
        </div>

        <button
          @click="loadMore"
          class="mt-5 flex justify-center items-center py-3 px-8 text-white bg-[#1C6220] hover:bg-[#113912] gap-2.5 w-fit"
          :disabled="isLoading"
        >
          Load More
          <ArrowDownIcon
            v-if="!isLoading"
            class="size-6 text-white font-main"
          />
          <ArrowPathIcon class="animate-spin size-6 mx-auto" v-if="isLoading" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDownIcon, ArrowPathIcon } from "@heroicons/vue/20/solid";

const { container } = useTailwindConfig();
const blogSize = ref();
const isLoading = ref(false);
blogSize.value = 102.5;
useSeoMeta({
  title: "Media Center",
  ogTitle: "Media Center",
  description:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogDescription:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogImage: "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});

const loadMore = () => {
  isLoading.value = true;
  setTimeout(() => {
    blogSize.value = blogSize.value * 2;
    isLoading.value = false;
  }, 500);
};

const blogs = [
  {
    title: "Sustainable Mobility: The Future of Urban Transportation",
    description:
      "Exploring strategies for eco-friendly and efficient urban transportation in growing cities.",
    content:
      "As cities grow and populations increase, the need for sustainable mobility solutions is more urgent than ever. This blog explores various strategies to make urban transportation eco-friendly and efficient.",
    tags: ["sustainability", "urban mobility", "green transportation"],
    image: "https://picsum.photos/300/200",
    date: "2024-10-01",
    slug: "sustainable-mobility-urban-transportation",
    minutesRead: 7,
  },
  {
    title: "Top 5 Bottle Recycling Hacks to Try at Home",
    description:
      "Creative and fun ways to recycle plastic bottles and contribute to environmental sustainability.",
    content:
      "Recycling bottles doesn't have to be boring! Learn five creative ways to repurpose your old plastic bottles while helping the environment.",
    tags: ["recycling", "DIY", "eco-friendly"],
    image: "https://picsum.photos/300/200",
    date: "2024-09-25",
    slug: "top-bottle-recycling-hacks",
    minutesRead: 5,
  },
  {
    title: "How to Set Up an Electric Vehicle Charging Station at Home",
    description:
      "A step-by-step guide to setting up your own electric vehicle charging station at home.",
    content:
      "With more people adopting electric vehicles, setting up a home charging station is becoming a necessity. This guide walks you through the process step-by-step.",
    tags: ["EV charging", "electric vehicles", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-09-18",
    slug: "setup-ev-charging-station",
    minutesRead: 8,
  },
  {
    title: "The Economic Benefits of Recycling Plastics",
    description:
      "How recycling plastics boosts the economy by creating jobs and reducing business costs.",
    content:
      "Recycling plastics doesn't just save the environment – it can also boost the economy. Learn how recycling initiatives create jobs and reduce costs for businesses.",
    tags: ["recycling", "economy", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-09-10",
    slug: "economic-benefits-recycling",
    minutesRead: 6,
  },
  {
    title: "Why Renewable Energy is the Key to a Greener Future",
    description:
      "The role of renewable energy sources in reducing carbon emissions and combating climate change.",
    content:
      "This article explores how renewable energy sources, like solar and wind power, can significantly reduce carbon emissions and combat climate change.",
    tags: ["renewable energy", "sustainability", "green future"],
    image: "https://picsum.photos/300/200",
    date: "2024-08-30",
    slug: "renewable-energy-greener-future",
    minutesRead: 9,
  },
  {
    title: "Understanding the Lifecycle of PET Plastics",
    description:
      "A deep dive into the lifecycle of PET plastics, from production to recycling.",
    content:
      "From production to recycling, PET plastics have a unique lifecycle. Discover how these materials can be transformed into new products through proper recycling techniques.",
    tags: ["PET plastics", "recycling", "materials"],
    image: "https://picsum.photos/300/200",
    date: "2024-08-25",
    slug: "lifecycle-of-pet-plastics",
    minutesRead: 4,
  },
  {
    title: "5 Steps to Building a Sustainable Business Model",
    description:
      "Essential steps to integrate eco-friendly practices into your business operations.",
    content:
      "Looking to make your business more sustainable? This guide covers five essential steps to integrate eco-friendly practices into your company's core operations.",
    tags: ["business", "sustainability", "green business"],
    image: "https://picsum.photos/300/200",
    date: "2024-08-12",
    slug: "steps-sustainable-business-model",
    minutesRead: 7,
  },
  {
    title: "How Electric Vehicles Are Revolutionizing Fleet Management",
    description:
      "Discover how electric vehicles are transforming the way companies manage their fleets.",
    content:
      "Electric vehicles (EVs) are changing the game for fleet managers. Find out how EVs can reduce costs and improve efficiency for corporate fleets.",
    tags: ["electric vehicles", "fleet management", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-07-28",
    slug: "ev-fleet-management-revolution",
    minutesRead: 6,
  },
  {
    title: "The Importance of Local Manufacturing in Sustainable Development",
    description:
      "How local manufacturing contributes to sustainable development and economic growth.",
    content:
      "Local manufacturing plays a vital role in reducing emissions and supporting economic growth. Learn how sustainable practices are being integrated into manufacturing industries.",
    tags: ["local manufacturing", "sustainable development", "green economy"],
    image: "https://picsum.photos/300/200",
    date: "2024-07-15",
    slug: "importance-local-manufacturing",
    minutesRead: 8,
  },
  {
    title: "How Bottle Caps Can Be Recycled for a Cleaner Environment",
    description:
      "Learn why recycling bottle caps can make a big difference in environmental conservation.",
    content:
      "Many people overlook bottle caps in recycling efforts. This article explains how these small items can make a big impact when recycled properly.",
    tags: ["recycling", "bottle caps", "environment"],
    image: "https://picsum.photos/300/200",
    date: "2024-07-02",
    slug: "recycling-bottle-caps",
    minutesRead: 4,
  },
  {
    title: "The Role of Education in Promoting Environmental Stewardship",
    description:
      "Explore how environmental education initiatives are shaping eco-conscious communities.",
    content:
      "Environmental education is key to creating a more sustainable future. Discover how education initiatives are shaping eco-conscious communities.",
    tags: ["education", "environmental stewardship", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-06-21",
    slug: "role-education-environmental-stewardship",
    minutesRead: 7,
  },
  {
    title: "How Renewable Energy Can Power the Next Generation of Smart Cities",
    description:
      "Discover the role of renewable energy in building smarter, more sustainable cities.",
    content:
      "Smart cities are on the rise, and renewable energy is a crucial component. Learn how integrating green energy solutions is key to building smarter, sustainable cities.",
    tags: ["smart cities", "renewable energy", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-06-15",
    slug: "renewable-energy-smart-cities",
    minutesRead: 9,
  },
  {
    title: "Recycling Initiatives Around the World: What We Can Learn",
    description:
      "Explore successful global recycling programs and the lessons they offer for local initiatives.",
    content:
      "From Sweden to Japan, countries across the globe are setting benchmarks in recycling. This blog explores various global recycling programs and what we can learn from them.",
    tags: ["recycling", "global initiatives", "sustainability"],
    image: "https://picsum.photos/300/200",
    date: "2024-06-03",
    slug: "global-recycling-initiatives",
    minutesRead: 8,
  },
  {
    title: "The Growing Demand for Electric Vehicles in Africa",
    description:
      "An in-depth look at why Africa is experiencing a surge in electric vehicle adoption.",
    content:
      "Africa is seeing a surge in the demand for electric vehicles. Explore the factors contributing to this growing trend and its impact on the continent's future.",
    tags: ["electric vehicles", "Africa", "sustainable mobility"],
    image: "https://picsum.photos/300/200",
    date: "2024-05-28",
    slug: "electric-vehicles-demand-africa",
    minutesRead: 6,
  },
  {
    title: "How to Reduce Plastic Waste in Your Daily Life",
    description:
      "Simple tips to cut down on plastic consumption and contribute to a cleaner environment.",
    content:
      "Reducing plastic waste starts at home. Here are some simple and effective ways you can cut down on your plastic consumption and help protect the environment.",
    tags: ["plastic waste", "recycling", "eco-friendly habits"],
    image: "https://picsum.photos/300/200",
    date: "2024-05-15",
    slug: "reduce-plastic-waste-daily-life",
    minutesRead: 5,
  },
];
</script>
