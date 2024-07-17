<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex-row py-20 justify-between items-center gap-28"
      :class="container"
    >
      <div class="flex flex-1 flex-col gap-y-2.5">
        <h3
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-[#1C6220]"
        >
          About Us
        </h3>
        <p
          v-motion
          :initial="{ opacity: 1, y: 50 }"
          :enter="{ opacity: 1, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-2xl lg:text-3xl text-[#113912]"
        >
          Leading The Electric Vehicle Revolution
        </p>
        <p
          v-motion
          :initial="{ opacity: 1, y: 150 }"
          :enter="{ opacity: 1, y: 150 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="600"
          class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
        >
          Metropolitan Electric Limited is at the forefront of revolutionizing
          the Electric Vehicle (EV) industry across Africa. Established in
          Nigeria, our company is committed to leading the adoption of Electric
          Vehicles in Nigeria and promoting sustainable mobility throughout the
          continent. We are dedicated to providing innovative and sustainable
          transportation solutions tailored for the African market.
        </p>
        <NuxtLink
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="700"
          to="#"
          class="font-main text-sm text-[#505050] underline font-semibold hover:no-underline"
        >
          Discover Our Story
        </NuxtLink>
      </div>
      <div v-motion-fade-visible-once :duration="1200" class="flex-1">
        <img src="/sectionImage1.png" alt="Gear Image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
