<template>
  <div
    ref="noAuthContainer"
    class="no-authorization-container"
    v-bind:class="{ displayed: isDisplayed }"
  >
    <p class="error-info">Nieprawidłowe dane logowania</p>
  </div>
  <div class="form-container">
    <form @submit.prevent="login" class="d-flex">
      <div class="input">
        <input
          class="btn btn-outline-success first-input"
          type="text"
          name="email"
          placeholder="Użytkownik"
        />
      </div>
      <div class="input">
        <input
          class="btn btn-outline-success"
          type="password"
          name="password"
          placeholder="Hasło"
        />
      </div>
      <button
        v-on:click="onSubmit"
        type="submit"
        class="btn btn-success"
        id="login_button"
      >
        Zaloguj
      </button>
    </form>
  </div>
</template>

<script>
import authInfo from "../../services/LoginAuthorization";

export default {
  name: "LoginForm",
  data() {
    return {
      isDisplayed: false,
    };
  },
  methods: {
    onSubmit() {
      this.goToMainApp();
    },
    goToMainApp() {
      if (authInfo.isAuthorization) {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/");
        this.displayNoAuthInfo();
      }
    },
    displayNoAuthInfo() {
      this.isDisplayed = true;
    },
  },
};
</script>

<style scoped>
.no-authorization-container {
  display: none;
  margin-top: 20px;
  margin-bottom: -10px;
}
.no-authorization-container.displayed {
  display: block;
}

.no-authorization-container .error-info {
  text-align: center;
  font-weight: bolder;
  color: var(--error);
}
.form-container form {
  flex-direction: column;
  align-items: center;
}
.form-container form .input {
  width: 100%;
  margin-bottom: 10px;
  margin-left: 15px;
}

.form-container form .input input {
  width: 95%;
}

.first-input {
  margin-top: 20px;
}

.form-container .input input::placeholder {
  color: var(--white);
  opacity: 0.5;
}

.form-container form button {
  width: 95%;
  margin-bottom: 10px;
}
</style>
