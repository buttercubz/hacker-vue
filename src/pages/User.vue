<script lang="ts" setup>
import Layout from "../components/Layout.vue";
import { ApiEndPoints } from "../utils/api";
import { timeAgo } from "../utils/time";
import type { IUser } from "../types";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const isLoaded = ref(false);
const user = ref<IUser>();
const $route = useRoute();

onMounted(async () => {
  const response = await fetch(
    ApiEndPoints.getUser($route.params?.id as string)
  );
  const data = (await response.json()) as IUser;

  user.value = data;
  isLoaded.value = true;
});
</script>

<template>
  <Layout :tabs-size="0" :hide="true">
    <div
      v-if="isLoaded"
      class="mx-auto bg-white w-11/12 lg:3/5 mt-3 rounded-md flex flex-col justify-start p-10"
    >
      <span class="font-bold text-lg">User: {{ user?.id }}</span>

      <div class="my-3 flex flex-col">
        <span> Created: {{ timeAgo(user?.created) }} ago</span>
        <span> Karma: {{ user?.karma }} </span>

        <span class="mt-4 text-clip">{{ user?.about }}</span>

        <div class="mt-4">
          <a
            class="underline hover:text-green-500"
            :href="`https://news.ycombinator.com/submitted?id=${user?.id}`"
          >
            submissions
          </a>
          {{ " | " }}
          <a
            class="underline hover:text-green-500"
            :href="`https://news.ycombinator.com/threads?id=${user?.id}`"
          >
            comments
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>
