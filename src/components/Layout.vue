<script lang="ts" setup>
import Navigation from "./Navigation.vue";

const props = defineProps<{
  tabsSize: number;
  hide: boolean;
}>();
</script>

<template>
  <main class="flex flex-col max-h-full">
    <Navigation :tabs-size="props.tabsSize" :hide="props.hide" />

    <div class="bg-gray-100 flex mt-24">
      <slot />
    </div>
  </main>
</template>
