<script lang="ts" setup>
import { paginateArray } from "../utils/paginate";
import { onMounted, onUpdated, ref } from "vue";
import Layout from "../components/Layout.vue";
import { useTopPage } from "../store/Pages";
import { ApiEndPoints } from "../utils/api";
import Item from "../components/Item.vue";
import { useRoute } from "vue-router";

const pages = ref<number[][]>([]);
const top = useTopPage();

const $route = useRoute();

onUpdated(() => {
  if ($route.params?.page) {
    const index = Number($route.params?.page) - 1;

    top.page = pages.value[index];
  } else {
    top.page = pages.value[0];
  }
});

onMounted(async () => {
  const response = await fetch(ApiEndPoints.topStories());
  const data = (await response.json()) as number[];

  pages.value = paginateArray(data, 16);

  if ($route.params?.page) {
    const index = Number($route.params?.page) - 1;

    top.page = pages.value[index];
  } else {
    top.page = pages.value[0];
  }
});
</script>

<template>
  <Layout :tabs-size="pages.length" :pages="pages" :hide="false">
    <div class="mx-auto bg-white w-3/5 mt-3 rounded-md">
      <Item v-for="item in top.page" :key="item" :item="item" />
    </div>
  </Layout>
</template>
