<template>
  <span>
    <NuxtLink :class="navLinkStyle" :to="toUrl"><slot /> </NuxtLink>
  </span>
</template>

<script lang="ts" setup>
const { navLinkStyle } = useTailwindConfig();
const props = defineProps({
  toUrl: {
    type: String,
    require: true,
  },
});
</script>
