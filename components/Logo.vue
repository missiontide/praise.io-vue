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
</style>