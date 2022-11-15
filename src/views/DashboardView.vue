<template>
  <Sidebar />
  <Topbar location="Pulpit" />
  <Bottombar />

  <main class="view-container">
    <div class="fog">
      <div class="dashboard-container">
        <WorkScheduler />
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "/src/components/navigation/sidebar/Sidebar.vue";
import Topbar from "/src/components/navigation/topbar/Topbar.vue";
import Bottombar from "/src/components/navigation/bottombar/Bottombar.vue";
import WorkScheduler from "/src/components/main-components/WorkScheduler.vue";
export default {
  name: "DashboardView.vue",
  components: { Sidebar, Topbar, Bottombar, WorkScheduler },
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  border: 1px solid var(--gray-border);
  border-radius: 5px;
  padding: 10px;
  background-color: var(--white);
}
.fog {
  padding: 5px;
}
h1,
p {
  color: var(--base-label);
}
</style>
