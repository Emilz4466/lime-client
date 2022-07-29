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
  components: { LimeHeader, LoginForm }
};
</script>

<style scoped>
  main {
    display: grid;
    border: 5px solid #198754;
    border-radius: 10px;
    padding: 5px;
    background-color: #7BE125ED;
    width: 500px;
  }

  @media only screen and (max-width: 768px) {
    main {
      width:300px;
    }
  }
</style>
