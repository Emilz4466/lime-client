<template>
  <Sidebar />
  <Topbar location="Pulpit" />
  <div class="view-container">
    <h1>TODO</h1>
    <p>1. Poprawki w sidebarze (wielkosci, ulozenie)</p>
    <p>2. Topbar (wylogowanie, ustawienia uzytkownika)</p>
    <p>3. Bottom navigation (mobilna wersja sidebara)</p>
  </div>
</template>

<script>
import Sidebar from "/src/components/sidebar/Sidebar.vue";
import Topbar from "/src/components/topbar/Topbar.vue";
export default {
  name: "DashboardView.vue",
  components: { Sidebar, Topbar },
};
</script>

<style scoped>
h1,
p {
  color: green;
}
</style>
