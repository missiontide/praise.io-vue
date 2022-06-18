<template>
  <div class="App">
    <SongSearchBar />
    <SelectedSongs />
  </div>
</template>

<script>
import SongSearchBar from "./SongSearchBar";
import SelectedSongs from "./SelectedSongs";

export default {
  name: "App",
  components: {
    SongSearchBar,
    SelectedSongs
  },

}
</script>

<style scoped>

</style>
