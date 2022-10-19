<template>
  <main>
    <LimeHeader />
    <LoginForm />
  </main>
</template>
<script>
import LoginForm from "../components/login/LoginForm.vue";
import LimeHeader from "../components/login/LimeHeader.vue";
export default {
  name: "LoginView",
  components: { LimeHeader, LoginForm },
};
</script>

<style>
@import "../assets/global-vars.css";
main {
  display: grid;
  border: 1px solid var(--gray-border);
  border-radius: 10px;
  padding: 5px;
  background-color: transparent;
  width: 350px;
  box-shadow: 0 0 20px 10px var(--header-background);
}

@media only screen and (max-width: 768px) {
  main {
    width: 300px;
    display: block;
    margin: auto;
  }
}
</style>
