<script lang="ts" setup>
import type { ItemInterface } from "../types";
import { ApiEndPoints } from "../utils/api";
import { timeAgo } from "../utils/time";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const props = defineProps<{ item: number }>();
const item = ref<ItemInterface>();
const isLoaded = ref(false);

const $router = useRouter();

const hostName = (url: string) =>
  new URL(url ?? "https://news.ycombinator.com").host;

async function fetchItem() {
  const response = await fetch(ApiEndPoints.getItem(props.item));
  const data = (await response.json()) as ItemInterface;

  item.value = data;
  isLoaded.value = true;
}

onMounted(async () => {
  await fetchItem();

  $router.afterEach(async (to, from, fail) => {
    if (to.fullPath !== from.fullPath && !fail) {
      await fetchItem();
    }
  });
});
</script>

<template>
  <div
    v-if="isLoaded"
    class="flex border-b-2 border-gray-100 flex-row h-20 p-4 transition duration-500 ease-in-out"
  >
    <div class="flex w-10 h-5 items-center justify-center">
      <span class="text-green-500 font-bold">
        {{ item?.score }}
      </span>
    </div>
    <div class="flex flex-col justify-center mx-4">
      <a :href="item?.url">
        <span>{{ item?.title }}</span>
        <span class="text-gray-400"> ({{ hostName(item?.url) }}) </span>
      </a>
      <div class="flex text-gray-500 text-sm">
        <span class="flex items-center ml">
          <span class="mx-2"> by </span>
          <span class="underline hover:text-green-500">
            <router-link :to="`/users/${item?.by}`">
              {{ item?.by }}
            </router-link>
          </span>

          <span class="mx-2"> {{ timeAgo(item?.time) }} ago </span>

          <span v-if="item?.kids" class="underline hover:text-green-500">
            <a :href="`https://news.ycombinator.com/item?id=${item?.id}`">
              {{ " | " }} {{ item?.kids?.length }} Comments
            </a>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
