<template>
  <div>
    <div
      class="bg-fixed bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-black/30 after:to-black/65"
      style="background-image: url('/bgImage.png')"
    >
      <div
        class="relative flex flex-col h-[80vh] justify-center"
        :class="container"
      >
        <div class="flex flex-col gap-y-3.5 z-20 w-full max-w-2xl">
          <p
            style="font-family: Varela Round"
            class="font-semibold text-[40px] text-white leading-10"
          >
            Driving The Future Of Sustainable Mobility In Africa
          </p>
          <p class="text-lg md:text-lg text-white">
            Leading the Electric Vehicle Revolution across the Continent
          </p>
          <NuxtLink
            to="/"
            class="px-8 py-3 bg-[#1c6220] hover:bg-[#113a13] w-fit font-bold text-white transition-all duration-200"
            style="font-family: Varela Round"
            >Learn More</NuxtLink
          >
        </div>
        <div class="absolute bottom-5 inset-x-0">
          <NuxtLink to="#blueprint">
            <ArrowCircleDownIcon
              class="size-6 md:size-10 mx-auto animate-bounce"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
