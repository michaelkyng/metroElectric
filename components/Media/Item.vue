<template>
  <NuxtLink to="/" class="group relative flex flex-col h-[500px] justify-end">
    <div>
      <img
        class="absolute top-0 left-0 size-full object-cover"
        :src="image"
        alt="Green Drive Image"
      />
      <div
        class="relative flex p-5 bg-black/15 backdrop-blur-sm overflow-hidden"
      >
        <div
          class="relative flex bottom-0 -left-14 group-hover:left-0 gap-2.5 w-full items-end transition-all duration-500 ease-in-out"
        >
          <ArrowRightIcon class="size-10 text-white shrink-0" />
          <div class="flex flex-col">
            <p class="text-white text-lg font-noto">
              {{ title }}
            </p>
            <h2 class="text-white text-3xl font-main">
              {{ description }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/20/solid";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  minutesRead: {
    type: Number,
    required: true,
  },
});
</script>
