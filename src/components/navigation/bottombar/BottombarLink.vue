<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <font-awesome-icon :icon="['fas', icon]" class="icon" size="2x" />
  </router-link>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "BottombarLink",
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);

    return { isActive };
  },
};
</script>

<style scoped>
.link {
  border-radius: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  bottom: 0;
}
.link:hover,
link:active {
  bottom: 10px;
  background-color: var(--bottombar-background);
}
.link.active {
  bottom: 10px;
  background-color: var(--sidebar-text);
}
.link .icon {
  cursor: pointer;
  color: var(--btn-green);
}

.link.active .icon {
  color: var(--bottombar-background);
}
</style>
