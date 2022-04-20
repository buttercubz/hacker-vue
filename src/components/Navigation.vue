<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUpdated, ref } from "vue";

const props = defineProps<{ tabsSize: number; hide: boolean }>();

const $route = useRoute();
const $router = useRouter();

const isStartPage = ref(false);
const isEndPage = ref(false);

const matchPath = (link: string, path: string) =>
  link === path || path.startsWith(link);

const navigate = (to: string) =>
  $router.push(`${$route.path.replace($route.params?.page as string, to)}`);

const navigatePath = (to: string) => {
  const path = $route.path;

  return $router.push(`${path}${path.endsWith("/") ? to : `/${to}`}`);
};

const validatePages = () => {
  isStartPage.value =
    (!!$route.params?.page && Number($route.params?.page) <= 1) ||
    !$route.params?.page;

  isEndPage.value =
    !!$route.params?.page &&
    Number($route.params?.page) >= Number(props.tabsSize);
};

async function Next() {
  if (!isEndPage.value) {
    if (!$route.params?.page) {
      await navigatePath(`${Number($route.params?.page ?? 0) + 2}`);
    } else {
      await navigate(`${Number($route.params?.page ?? 0) + 1}`);
    }
  }
}

async function Prev() {
  if (!isStartPage.value) {
    await navigate(`${Number($route.params?.page ?? 0) - 1}`);
  }
}

const tabs = [
  {
    title: "Top",
    link: "/top",
  },
  {
    title: "New",
    link: "/new",
  },
  {
    title: "Show",
    link: "/show",
  },
  {
    title: "Ask",
    link: "/ask",
  },
  {
    title: "Jobs",
    link: "/job",
  },
];

onUpdated(() => {
  validatePages();
});

onMounted(async () => {
  validatePages();

  // redirect to the last valid page
  if (Number($route.params?.page) > props.tabsSize!) {
    await navigate(props.tabsSize?.toString()!);
  }
});
</script>

<template>
  <nav class="flex w-full h-auto justify-center items-center flex-col fixed">
    <ul
      class="bg-green-500 flex mx-auto text-xl w-full -mt-1 justify-center items-center h-14 text-gray-300"
    >
      <li
        v-for="(tab, key) in tabs"
        :class="[
          'mx-3',
          matchPath(tab.link, $route.path) ? 'text-gray-100' : '',
        ]"
        :key="key"
      >
        <router-link :to="tab.link">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>

    <div
      v-if="!props.hide"
      class="bg-white w-full flex items-center justify-center h-10 shadow-md"
    >
      <div class="flex">
        <button
          @click="Prev"
          :class="[
            'mx-2',
            isStartPage ? 'text-gray-500 cursor-not-allowed' : '',
          ]"
        >
          <span>
            {{ "< Prev " }}
          </span>
        </button>

        <span> {{ $route.params?.page ?? 1 }}/{{ props.tabsSize }} </span>

        <button
          @click="Next"
          :class="['mx-2', isEndPage ? 'text-gray-500 cursor-not-allowed' : '']"
        >
          <span>
            {{ " Next >" }}
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>
