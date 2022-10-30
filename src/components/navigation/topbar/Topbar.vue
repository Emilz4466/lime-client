<template>
  <div class="topbar-container">
    <header>
      {{ location }}
    </header>
    <div>
      <b-nav pills>
        <b-nav-item active @click="goToSettings">
          <font-awesome-icon icon="fa-solid fa-gear" class="icon" size="2x" />
        </b-nav-item>
        <b-nav-item active @click="logout">
          <font-awesome-icon
            icon="fa-solid fa-right-from-bracket"
            class="icon"
            size="2x"
          />
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
import "../../icons/IconManager.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Topbar",
  props: {
    location: String,
  },
  methods: {
    goToSettings() {
      this.$router.push("/dashboard");
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.topbar-container {
  background-color: var(--white);
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  color: var(--btn-green);
  z-index: 9998;
}
header {
  margin-left: 200px;
  font-size: 30px;
  font-weight: bold;
}
b-nav {
  margin-right: 10px;
  width: 100px;
}
b-nav-item {
  padding: 5px;
  margin-top: 5px;
  cursor: pointer;
}

b-nav-item:hover {
  color: var(--btn-green-hover);
}

b-nav-item svg {
  margin-top: 10px;
  margin-right: 10px;
}
@media only screen and (max-width: 768px) {
  header {
    margin-left: 20px;
  }
}
</style>
