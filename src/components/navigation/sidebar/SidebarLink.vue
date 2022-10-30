<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <font-awesome-icon :icon="['fas', icon]" class="icon" />
    <transition name="fade">
      <span>
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SidebarLink",
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.2em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: var(--sidebar-text);
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}

.link span {
  margin-right: 15px;
}
</style>
