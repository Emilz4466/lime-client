<template>
  <header>
    <h2 class="component-header">Plan pracy</h2>
    <div class="separator">
      <div class="inner-separator"></div>
    </div>
  </header>
  <main>
    <ul class="week-schedule">
      <li v-for="day in days" :key="day.id">
        <p>{{ day.name }}</p>
        <p>{{ day.date }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
import getData from "../../services/ObjectService.js";

export default {
  name: "WorkScheduler",
  data() {
    return {
      days: getData("week_schedule").week_schedule,
    };
  },
};
</script>

<style scoped>
.week-schedule {
  display: flex;
  list-style-type: none;
  color: black;
  margin-top: 10px;
  padding: 0;
}

.week-schedule li {
  border: 1px solid var(--bs-border-color);
  width: 120px;
  margin-right: 5px;
}
</style>
