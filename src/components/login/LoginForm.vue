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
  name: "LoginForm"
};
</script>

<style scoped>
  .form-container {
  }

  form{
    flex-direction: column;
    align-items: center;
  }
  input {
    width:300px;
    margin-bottom: 10px;
  }

  .first-input {
    margin-top:20px;
  }

  input:focus {
    box-shadow: none;
  }

  input::placeholder {
    color: #fff;
    opacity: .5;
  }

  button {
    width: 200px;
  }
</style>
