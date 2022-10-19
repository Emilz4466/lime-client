<template>
  <div class="lime-header-container">
    <div class="logo">
      <img src="../icons/main-logo.png" alt="" />
    </div>
    <div class="info">
      <h1 class="name">LIME HR</h1>
      <p class="sub-text">Portal kadrowo - płacowy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LimeHeader.vue",
};
</script>

<style>
@import "../../assets/global-vars.css";
.lime-header-container {
  display: flex;
  width: 100%;
  padding: 10px;
}

img {
  display: inline-block;
  width: 50px;
  height: 50px;
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

.info {
  margin-left: 10px;
  text-align: center;
}

.sub-text {
  font-weight: bold;
  color: var(--header-text);
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .info {
    margin-left: 0;
  }
}
</style>
