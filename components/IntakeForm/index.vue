<template>
  <div :class="container">
    <div class="flex flex-col gap-2.5 py-24 px-10 sm:px-20 md:px-36">
      <div
        v-motion
        :initial="{ opacity: 1, y: 20 }"
        :enter="{ opacity: 1, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="400"
        :delay="500"
        class="flex items-center gap-1.5"
      >
        <span class="size-3 bg-[#1C6220]"></span>
        <p class="text-[#1C6220]">Intake Form</p>
      </div>
      <p
        v-motion
        :initial="{ opacity: 1, y: 50 }"
        :enter="{ opacity: 1, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="300"
        :delay="500"
        class="text-2xl lg:text-3xl text-[#1C6220]"
      >
        Help Us Serve You Better
      </p>
      <p
        v-motion
        :initial="{ opacity: 1, y: 150 }"
        :enter="{ opacity: 1, y: 150 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="300"
        :delay="600"
        class="text-base lg:text-lg"
      >
        Complete the required fields and share your responses with us.
      </p>
      <form
        v-motion-slide-visible-once-bottom
        :duration="400"
        :delay="600"
        class="flex flex-col gap-y-4 py-6"
      >
        <label class="text-sm sm:text-base block">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold"
          >
            Name
          </span>
          <input
            type="text"
            name="name"
            class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm md:text-base focus:ring-1"
            placeholder="Jane Smith"
          />
        </label>
        <label class="text-sm sm:text-base block">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold"
          >
            Email
          </span>
          <input
            type="email"
            name="email"
            class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm md:text-base focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
        <label class="text-sm sm:text-base block">
          <span
            class="after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold"
          >
            Message
          </span>
          <textarea
            rows="5"
            name="number"
            class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm md:text-base focus:ring-1"
            placeholder="Your Message"
          ></textarea>
        </label>
        <input
          class="text-sm sm:tex-base py-3 px-8 text-center bg-[#1C6220] hover:bg-[#113912] cursor-pointer text-white font-semibold block transition-colors duration-200"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
