<template>
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
      <button type="submit" class="btn btn-success" id="login_button">
        Zaloguj
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style>
@import "../../assets/global-vars.css";
.form-container {
}

.form-container form {
  flex-direction: column;
  align-items: center;
}
.form-container .input {
  width: 100%;
  margin-bottom: 10px;
  margin-left: 15px;
}
.form-container .input input {
  width: 95%;
}
.first-input {
  margin-top: 20px;
}

.form-container .input input::placeholder {
  color: var(--white);
  opacity: 0.5;
}

button {
  width: 95%;
}
</style>
