<template>
  <router-link :to="to" class="link">
    <font-awesome-icon :icon="['fas', icon]" class="icon" />
    <transition name="fade">
      <span>
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import "../../components/icons/IconManager";

export default {
  name: "SidebarLink",
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
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
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}

.link span {
  margin-right: 15px;
}
</style>
