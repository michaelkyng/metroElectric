<template>
  <div
    class="flex flex-col md:flex-row justify-start gap-10 py-24"
    :class="container"
  >
    <div
      v-motion-fade-visible-once
      :duration="1200"
      class="rounded-xl overflow-clip w-full h-fit md:w-80 md:h-[435px]"
    >
      <img
        class="object-cover w-full h-full"
        :src="`card/${props.data?.image}`"
        :alt="props.data?.title"
      />
    </div>
    <div class="flex flex-col gap-5 justify-center items-start">
      <div
        v-motion
        :initial="{ opacity: 1, y: 20 }"
        :enter="{ opacity: 1, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="400"
        :delay="500"
        class="flex items-center gap-1.5"
      >
        <span class="size-4 md:size-3 bg-[#1C6220]"></span>
        <p
          class="font-medium md:font-semibold text-2xl md:text-base text-[#1C6220]"
        >
          {{ props.data?.title }}
        </p>
      </div>
      <NuxtLink
        v-motion
        :initial="{ opacity: 1, y: 50 }"
        :enter="{ opacity: 1, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="300"
        :delay="500"
        to="/scheduling"
        class="py-2.5 px-8 text-lg md:text-base bg-[#1C6220] hover:bg-[#113912] transition-colors duration-200 text-white font-semibold"
        >Schedule Appointment</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["data"]);
const { container } = useTailwindConfig();

const headTitle = ref("");
const headDescription = ref("");

watch(
  () => props.data,
  (newData) => {
    headTitle.value = newData?.title || "";
    headDescription.value = newData?.description || "";
  },
  { immediate: true }
);

useHead({
  title: headTitle,
  meta: [
    {
      hid: "description",
      name: "description",
      content: headDescription,
    },
  ],
});
</script>
