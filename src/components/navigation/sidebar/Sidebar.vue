<template>
  <div class="sidebar-container">
    <header>
      <span class="logo">
        <img src="../../icons/main-logo.png" alt="" />
      </span>
      <h1>
        <span class="name">LIME HR</span>
      </h1>
    </header>
    <div class="separator"></div>
    <div class="user">
      <img v-bind:src="userPhoto" />
      <p>{{ userName }}</p>
    </div>
    <SidebarLink to="/dashboard" icon="fa-user">Pulpit</SidebarLink>
    <SidebarLink to="/" icon="fa-user">Poz 2</SidebarLink>
    <SidebarLink to="/" icon="fa-user">Poz 3</SidebarLink>
    <SidebarLink to="/" icon="fa-user">Poz 4</SidebarLink>
    <SidebarLink to="/" icon="fa-user">Poz 5</SidebarLink>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  components: { SidebarLink },
  data() {
    return {
      userName: "Emil Zyberski",
      userPhoto: "src/components/example_data/user.jpg",
    };
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 180px;
  color: var(--sidebar-text);
  background-color: var(--sidebar-bg);
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border-radius: 0 10px 10px 0;
  z-index: 9999;
}
header {
  display: flex;
  align-items: center;
  line-height: 3.2em;
}
img {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 20px;
}

.name {
  font-family: "Righteous", cursive;
  display: inline-block;
  font-size: 20px;
  color: var(--header-text);
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 3px;
}
.separator {
  border-top: 1px solid var(--gray-border);
  margin-bottom: 40px;
}
.user {
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  margin-bottom: 30px;
}
.user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user p {
  text-align: center;
  margin-right: 15px;
}
.sidebar h1 {
  height: 2.5em;
}

@media only screen and (max-width: 768px) {
  .sidebar-container {
    display: none;
    visibility: hidden;
  }
}
</style>
