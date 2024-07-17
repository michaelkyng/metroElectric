<template>
  <NuxtLink class="group p-0 shadow-2xl" :to="$props?.link">
    <div class="h-fit">
      <div class="flex flex-col">
        <div class="w-full h-96 md:h-64 lg:h-56 overflow-clip">
          <img
            class="w-full h-full object-cover"
            :src="`card/${props?.image}`"
            :alt="`card/${props?.image}`"
          />
        </div>
        <div class="p-5 space-y-5">
          <div class="flex items-center gap-2.5">
            <p
              class="text-[#113912] break-after-right group-hover:text-[#1C6220] text-lg lg:text-xl font-semibold"
            >
              {{ props?.title }}
            </p>
            <ChevronRightIcon
              class="text-[#113912] group-hover:text-[#1C6220] min-w-5 max-w-5 min-h-5 mzx-h-5"
            />
          </div>
          <p
            class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
          >
            {{ props?.description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  link: {
    type: String,
    default: "#",
  },
  image: {
    type: String,
    default: "card/corporate.png",
  },
  title: {
    type: String,
    default: "Corporate EV Solution",
  },
  description: {
    type: String,
    default:
      "We offer comprehensive electric vehicle solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
  },
});
</script>
