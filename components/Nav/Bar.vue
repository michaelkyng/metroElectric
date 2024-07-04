<template>
  <div class="bg-white p-4">
    <div class="flex justify-between items-center" :class="container">
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div class="flex gap-5 items-center">
        <NavLink to-url="/">Home</NavLink>
        <NavLink to-url="/">About</NavLink>
        <NavLink to-url="/">Services</NavLink>
        <NavLink to-url="/">Sustainability</NavLink>
        <NavLink to-url="/">Media Center</NavLink>
        <NuxtLink
          to="/"
          style="font-family: Varela Round"
          class="py-2.5 px-7 font-bold border-2 border-[#113912] hover:bg-[#1C6220] hover:border-[#1C6220] hover:text-white transition-all duration-200"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
