<template>
  <div
    class="group flex flex-col py-10 px-5 items-center gap-5 bg-white w-full max-w-md shadow-lg"
  >
    <h3 class="break-after-right text-lg font-semibold">
      {{ props.title }}
    </h3>
    <div
      class="flex justify-center items-center size-20 md:size-32 bg-gray-50 group-hover:bg-green-50 transition-colors duration-200 rounded-full overflow-clip"
    >
      <slot><IconsSustainability /></slot>
    </div>
    <p class="font-noto text-base text-[#505050] tracking-wide">
      {{ props.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { AcademicCapIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
  },
});
</script>
