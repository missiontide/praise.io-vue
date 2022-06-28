<template>
  <div>
    <img src="../static/logo.png" class="logo" alt="logo" />
    <p class="signature">
      made by <a href="https://www.missiontide.com" target="_blank" rel="noreferrer">@missiontide</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
  .signature {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 15px;
  }
  .signature a { color: black}
  
  img {
    max-width: 90%;
    margin: 75px auto;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
</style>