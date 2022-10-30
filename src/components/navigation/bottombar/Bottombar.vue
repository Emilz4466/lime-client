<template>
  <div class="bottombar-container">
    <main>
      <BottombarLink icon="fa-user" to="/dashboard" />
      <BottombarLink icon="fa-user" to="/" />
      <BottombarLink icon="fa-user" to="/" />
      <BottombarLink icon="fa-user" to="/" />
      <BottombarLink icon="fa-user" to="/" />
    </main>
  </div>
</template>

<script>
import BottombarLink from "./BottombarLink.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bottombar",
  components: { BottombarLink },
};
</script>

<style scoped>
.bottombar-container {
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: var(--bottombar-background);
  bottom: 0;
  z-index: 9999;
  border-radius: 10px 10px 0 0;
}

main {
  display: flex;
  justify-content: space-evenly;
}
@media only screen and (min-width: 768px) {
  .bottombar-container {
    display: none;
  }
}
</style>
