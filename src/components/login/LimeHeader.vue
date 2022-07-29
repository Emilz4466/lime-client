<template>
 <div class="lime-header-container">
   <div class="main-info">
    <img src="../icons/main-logo.png" />
     <h1 class="name">LIME HR</h1>
   </div>
   <div class="separator"></div>
   <div class="sub-info">
      <p>Portal kadrowo - płacowy</p>
   </div>
 </div>
</template>

<script>
export default {
  name: "LimeHeader.vue"
};
</script>

<style scoped>
  .lime-header-container {
    display: grid;
    grid-template-columns: 1fr 0fr 3fr;
    width:100%;
    background-color: #d2fd5a;
    padding: 10px;
    border-radius: 10px;

  }

  .main-info {

  }

  img {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 20px;

  }

  .name {
    font-family: 'Righteous', cursive;
    display: inline-block;
    font-size: 20px;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 3px;
  }

  .separator {
    width: 2px;
    background-color: #2c3e50;
  }

  .sub-info {

  }

  .sub-info p {
    color:#2c3e50;

  }
</style>
